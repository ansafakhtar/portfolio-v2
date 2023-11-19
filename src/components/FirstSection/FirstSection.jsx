// import React from 'react';
// import '../App.css';
// import { Button } from '../Button/Button';
import './FirstSection.css';
// import Typewriter from "typewriter-effect";

// <img src="images/ansaf-image.png" /> 

function FirstSection() {
    return (
      <div className="firstsection-container">
        <video src="/videos/video-3.mp4" autoPlay loop muted />

        {/* <h1>Ansaf Akhtar</h1> */}
        <div className='effect'>
        <div className='div-effect'>Hello!</div>
        <div className='div-effect2'>
          <span>Welcome to my portfolio</span>
        </div>
        </div>

        <div className="container">
      <p className="container-p">
        <span>
          The Future is Now.
        </span>
      </p>
      <p className="container-p">
        <span>
          Take Action.
        </span>
      </p>
    </div>
        {/* <p>
          <Typewriter 
            options={{
                strings: ['Web Developer', 'Designer'],
                autoStart: true,
                loop: true,
              }}
            />
\        </p> */}
        {/* <div className="firstsection-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            RESUME
          </Button>
        </div> */}
      </div>
    );
}

export default FirstSection
//  className='firstsection-container'