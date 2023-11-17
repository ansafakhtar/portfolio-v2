import "./Work.css";
import casette from '../../assets/retro.png'

const work = () => {

    return (
        <>
        <div className="worksection-container">
        <div className="left-section">
            <h1>Test</h1>
            <img
        src={casette}
        className="floating"
        alt="Retro Casette"
        style={{ width: "300px", height: "300px" }}
      />
        </div>

            <div className="experience-section">
                <div className="work-card">
                <div className="work-card-left">
                <h4 className="work-duration">Nov 2022 - Jul 2023</h4>
                </div>
                <div className="work-card-right">
                <h3 className="work-heading">Classic Informatics</h3>
                <p className="work-detail">Developing responsive and user-friendly web interfaces using HTML, CSS, ReactJS and JavaScript.
                Implementing and integrating APIs to fetch and display data from server-side services.
                Staying up-to-date with the latest front-end development trends, best practices, and emerging technologies.</p>
                <ul className="skill-list">
                    <li className="skill">React</li>
                    <li className="skill">JavaScript</li>                                    
                    <li className="skill">Material UI</li>
                    <li className="skill">Ant Design</li>
                    <li className="skill">CSS3</li>
                    <li className="skill">HTML5</li>
                </ul>
                </div>
                </div>

                <div className="work-card">
                <div className="work-card-left">
                <h4 className="work-duration">Jun 2022 - Nov 2022</h4>
                </div>
                <div className="work-card-right">
                <h3 className="work-heading">Happiest Minds Technologies</h3>
                <p className="work-detail">Developing and maintaining the user interface using ReactJS.
                Utilizing version control systems like Git for collaborative development and code management.
                Worked with UI/UX design team to improve existing application to increase engagement.</p>
                <ul className="skill-list">
                    <li className="skill">React</li>
                    <li className="skill">JavaScript</li>
                    <li className="skill">TypeScript</li>
                    <li className="skill">Material UI</li>
                    <li className="skill">CSS3</li>
                    <li className="skill">HTML5</li>
                </ul>                
                </div>
                </div>

                <div className="work-card">
                <div className="work-card-left">
                <h4 className="work-duration">Dec 2018 - Jun 2022</h4>
                </div>
                <div className="work-card-right">
                <h3 className="work-heading"> Tata Consultancy Services</h3>
                <p className="work-detail">Worked as a frontend developer using HTML, JavaScript, CSS and React JS. 
                Worked closely with an agile team and provided end-to-end solutions to clients.
                Performed API integration and testing to evaluate the performance of the product.</p>
                <ul className="skill-list">
                    <li className="skill">React</li>
                    <li className="skill">Redux</li>
                    <li className="skill">JavaScript</li>
                    <li className="skill">Material UI</li>
                    <li className="skill">CSS3</li>
                    <li className="skill">HTML5</li>
                </ul>                  
                </div>
                </div>                
            </div>
            </div>
        </>
    )
}

export default work;
