// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/NavBar/NavBar'
import './App.css'
import FirstSection from './components/FirstSection/FirstSection'
import ProjectsContainer from './components/Projects/ProjectContainer'
import Terminal from './components/Terminal/Terminal'
import Work from './components/Work/Work'
import casette from './assets/retro.png'

function App() {

  return (
    <>
      {/* ====================USE THIS ALIEN GIF================================== */}
      {/* <iframe src="https://giphy.com/embed/XcYbXTGzjGCrc87cIG" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/stickers/TELYORGANICS-space-alien-aliens-XcYbXTGzjGCrc87cIG">via GIPHY</a></p> */}

      <Navbar />
      <div className='alien1'>
        <img src="https://media.giphy.com/media/kReKcfrs1YoTmt2AQt/giphy.gif" width="222" frameBorder="0" style={{ position: "relative", right: "0" }}/>
      </div>
      <div className='alien2'>
        <img className='alien2-img' src="https://media.giphy.com/media/XcYbXTGzjGCrc87cIG/giphy.gif" width="300" frameBorder="0"/>
      </div>

      <div
        style={{
          display: "flex",
          placeContent: "center",
          padding: "50px",
          backgroundColor: "#000000",
        }}
      >
        <Terminal />
      </div>
      <Work />
      <img
        src={casette}
        className="floating"
        alt="Retro Casette"
        style={{ width: "300px", height: "300px" }}
      />

      {/* <FirstSection />
      <ProjectsContainer /> */}
    </>
  );
}

export default App
