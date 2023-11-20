import "./Terminal.css";
import casette from "../../assets/retro.png"
import { useState, useRef, useEffect } from 'react';

const aboutMe = (<>
    <br/>
    <h2 className="has-text-weight-bold">{`I'm Ansaf Akhtar`}</h2>
    <p>Here are few things about me:</p>
    <ul>
      <li className="is-rainbow-red">✅ Web Developer</li>
      <li className="is-rainbow-orange">✅ ReactJS Specialist</li>
      <li className="is-rainbow-yellow">✅ JavaScript Expert</li>
      {/* <li className="is-rainbow-green">✅ ECE Engineer</li> */}
      <li className="is-rainbow-blue">✅ Designer</li>
      <li className="is-rainbow-violet">
        ✅ Football Fanatic ⚽ (Hala Madrid!){" "}
      </li>
    </ul>
</>
);

// const getCommandOptions = string => {
//   const options = []
//   string.split(" ").forEach(st => {
//     if (st.includes("--")) {
//       options.push(st.replace("--", ""))
//     } else if (st.includes("-")) {
//       st.replace("-", "")
//         .split("")
//         .forEach(s => options.push(s))
//     }
//   })

//   return options
// }


const commands = {
  hello: ({ input, output, setOutput }) => {
    if (input[0] && input[0] === "--help") {
      setOutput([
        ...output,
        { text: "Hello command", bold: true },
        { text: "returns a greeting" },
        { text: "hello [name]" },
        { text: "" },
        { text: 'hello Bob: returns "Hello Bob"' }
      ])
    }
    else
    setOutput([...output, { text: `Hello There! ${input[0] || ""}` , class: "is-rainbow-orange" }])
  },
  commands: ({ output, setOutput }) => {
    setOutput([
      ...output,
      { text: "Commands available:", bold: true , class: "is-rainbow-orange"},
      { text: " " },
      ...Object.keys(commands).map(key => ({ text: key , class: "is-rainbow-orange" }))
    ])
  },
  date:({ output, setOutput }) => {
    const date = new Date();
    setOutput([...output, { text: `${date}` , class: "is-rainbow-orange" }])
  },
  echo: ({ input, output, setOutput }) =>
    setOutput([...output, { text: input.join(" ") , class: "is-rainbow-orange" }]),
  kill: ({ output, setOutput }) =>
    setOutput([
      ...output,
      { text: "Goodbye curel world! 💀", class: "is-rainbow-red" },
      <><img src="https://media.giphy.com/media/krMpiV41eo264/giphy.gif" /></>
      // <><img src="https://media.giphy.com/media/uC8SQoaY5EHhC/giphy.gif" /></>
    ]),
  clear: ({ setOutput }) => {
    setOutput([    
    <p className="text-info" key="output2">
      {`Type "commands" into the terminal window and hit enter to see all commands`}
    </p>])
  },
  aboutme: ({ setOutput, output }) => {
    setOutput([...output, aboutMe])
  },
  cat: ({ output, setOutput }) => {
    // if (input[0] === ".cv.json") {
      setOutput([
        ...output,
        { text: "Oops! no file to read.", class: "is-rainbow-orange"  },
        // <>
        // <a target="_blank" href="https://gist.github.com/bashleigh/3bdd8052db7617a9ca3b31976a8cffa0" rel="noreferrer">
        //   View my CV
        // </a>
        // </>
      ])
    // }
  },
  git: ({ output, setOutput }) =>
    setOutput([...output, { text: "Seems like you found the link to my github", class: "is-rainbow-orange" },
    <><a target="_blank" href="https://github.com/ansafakhtar" alt="Github Link" rel="noreferrer" className="is-rainbow-blue"> Click Here</a></>
  ]),
  ssh: ({ output, setOutput }) =>
    setOutput([
      ...output,
      { text: "Ummm.... I don't think you can ssh into css. This is just a pretty terminal window made out of HTML", class: "is-rainbow-orange" }
    ]),
  hacker: ({ output, setOutput }) =>
    setOutput([
      ...output,
      { text: "This is what my people says I look like. Don't know why, I don't code with bananas 🤷‍♀️", class: "is-rainbow-orange" },
      <><img src="https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif" /></>
    ]),
  info: ({ setOutput }) => {
    setOutput([<>
      <h1 className="title is-rainbow-text">Info</h1>
      <h3 className="subtitle">Version 1.0.0</h3></>,
      {
        text:
          "Welcome to the Tiny Terminal Window!",
        class: "is-rainbow-red"
      },
      <>
      <p className="is-rainbow-orange">
      {`This interactive terminal provides a user-friendly environment to execute commands and view real-time output.`}
        {/* <a target="_blank" href="https://github.com/" rel="noreferrer">
          click here to check out the repo if you want!
        </a> */}
      </p>
      <p className="is-rainbow-yellow">
        {`Feel free to experiment with various commands.`}
      </p>
      <p className="is-rainbow-blue">
         {`Explore, experiment, and enjoy the seamless interaction of this React-based terminal! `}
      </p>
      </>
    ])
  },
  contact: ({ output, setOutput }) => {
    setOutput([
      ...output,
      {
        text: "You can email me at ansafakhtar239@gmail.com",
        class: "is-rainbow-red"
      }
    ])

    // setTimeout(() => openContact(), 1500)
  }
}

// eslint-disable-next-line no-prototype-builtins
const isJsxElement = (value) => value.hasOwnProperty("type");

const runCommand = ({ input, setOutput, output }) => {
  if (input === "") {
    setOutput([...output, { text: "" }])
  }

  const inputs = input.split(" ")
  if (!inputs[0] || !Object.keys(commands).includes(inputs[0])) {
    if (!input[0] || input[0] === "") {
      setOutput([...output, { text: `❯ ${input}`, class: "is-rainbow-blue" }])
      return
    }

    setOutput([...output, { text: `command: "${inputs[0]}" not found`, class: "is-rainbow-red" }])
    return
  }

  output.push({ text: `❯ ${input}`, class: "is-rainbow-blue" })

  commands[inputs.shift()]({ input: inputs, setOutput, output })
}



const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    aboutMe,
    <p className="text-info" key="output2">
      {`Type "commands" into the terminal window and hit enter to see all commands`}
    </p>,
  ]);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const outputContainerRef = useRef(null);
  const inputElement = useRef();

  useEffect(() => {
    // Scroll to the bottom when output changes
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [output]);

  return (
    // <div style={{display: "flex", placeContent: "center", padding: "50px", backgroundColor:"#1d2524" }}>
    <div style={{zIndex:"11", display:"flex"}}>
      <div id="terminal">
        <header className="terminal-header">
          <div className="terminal-header-buttons">
            <div className="terminal-button close"></div>
            <div className="terminal-button minimise"></div>
            <div className="terminal-button expand"></div>
          </div>
        </header>

        <div
          className="terminal-body"
          onClick={() => {
            // @ts-ignore
            inputElement.current.focus();
          }}
        >

    <div className="terminal-body-commands" ref={outputContainerRef}>          
          <h1 className="decorative-text">{`HELLO !`}</h1>
          
          {output.map((line, index) =>
          isJsxElement(line) ? (
            <> <div key={`output-line-${index}`}>{line}</div> <br /> </>
          ) : (
            <p key={`${line}-${index}`} className={[line.class, line.bold ? "has-text-bold" : ""].join(" ")}>
              {line.text}
            </p>
          )
        )}
        <br />

    </div>
        <div className="terminal-control">
          <form
            className="terminal-input"
            onSubmit={event => {
              event.preventDefault();
              setTerminalHistory([...terminalHistory, input]);
              runCommand({ input, output, setOutput });
              setInput("");
            }}
          >
            <div className="field">
              <label className="label">~</label>

              <div className="control has-icons-left">
                <span className="icon">❯</span>
                <input
                  className={`input`}
                  name=""
                  autoCorrect="off"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoFocus={false}
                  onChange={event => {
                    const input = event.target.value;
                    setInput(input);
                  }}
                  value={input}
                  ref={inputElement}
                />
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
      
      <img
          src={casette}
          className="floating-casette"
          alt="Retro Casette"
      />
    </div>
  );
};

export default Terminal;
