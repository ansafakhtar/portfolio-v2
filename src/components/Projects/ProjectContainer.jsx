import CardItem from './CardItem';
import './ProjectsContainer.css';
import { TypeAnimation } from 'react-type-animation';
import RecipePlusLogo from "../../assets/RecipePlus.png";
import ClickBuyLogo from "../../assets/Untitled-6-01.png";
import Minion from "../../assets/minion.jpg";
import Quiz from "../../assets/quiz.jpg";
import Portfolio from "../../assets/portfolio.jpg";
import ContactBook from "../../assets/contact-book.jpg";


function ProjectsContainer() {
    return (
        <div className='cards' id='project-cards'>
        <div style={{display:"flex", justifyContent:"center"}}>
          <TypeAnimation
              sequence={[
                  'Some',
                  500,
                  'Some of My',
                  500,
                  'Some of My Coding Projects',
                  500,
                  'Some of My',
                  500,
                  'Some',
                  500,
                  '',
                  500,
              ]}
              speed={50}
              style={{ fontSize: '2em', color:"#DA0037", fontWeight:"700" }}
              repeat={Infinity}
              />
        </div>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={RecipePlusLogo}
                text='Explore unique food recipes with the help of the Recipe Search+ App'
                label='Food'
                path='https://recipesearchplus.netlify.app/'
              />
              <CardItem
                src={ClickBuyLogo}
                text='Online shopping store'
                label='Shopping'
                path='https://clickandbuy-webstore.netlify.app/'
              />
              <CardItem
                src={ContactBook}
                text='Simple contact book app made using react and redux'
                label='Utility'
                path='https://react-redux-contact-book.vercel.app/'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={Minion}
                text='Simple minionese language translator app'
                label='Game'
                path='https://minionesetranslatorapp.netlify.app/'
              />
              <CardItem
                src={Quiz}
                text='Basic command line interface (CLI) quiz app made using Node js'
                label='Game'
                path='https://replit.com/@AnsafAkhtar/First-Lesson-CLI-Quiz?embed=1&output'
              />
              <CardItem
                src={Portfolio}
                text='First portfolio made using HTML and CSS'
                label='Portfolio'
                path='https://ansaf-portfolio.netlify.app'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default ProjectsContainer
