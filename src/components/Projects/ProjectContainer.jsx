// import React from 'react';
// import {Link} from 'react-router-dom';

import CardItem from './CardItem';
import './ProjectsContainer.css';

function ProjectsContainer() {
    return (
        <div className='cards'>
        <h1>Check out my projects!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/Untitled-2-01.png'
                text='Explore unique food recipes with the help of the Recipe Search+ App'
                label='Food'
                path='https://recipesearchplus.netlify.app/'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default ProjectsContainer
