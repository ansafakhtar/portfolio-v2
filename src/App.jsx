// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/NavBar/NavBar'
import './App.css'
// import FirstSection from './components/FirstSection/FirstSection'
import ProjectsContainer from './components/Projects/ProjectContainer'
import Terminal from './components/Terminal/Terminal'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import Carousel from './components/Carousel/Carousel'

function App() {

  return (
    <>
      <Navbar />
      <div className='alien2'>
        <img className='alien2-img' src="https://media.giphy.com/media/XcYbXTGzjGCrc87cIG/giphy.gif" width="350" frameBorder="0"/>
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


      {/* <FirstSection /> */}
      <Carousel />
      <ProjectsContainer />
      <Footer />
    </>
  );
}

export default App
