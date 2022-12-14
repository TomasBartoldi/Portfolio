import './HeroImgStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';
import IntroImg from '../components/assets/astronaut.webp';

const HeroImg = () => {
  return (
    <div className='heroe'>
        <div className='mask'>
           <img className='intro-img' src={IntroImg} alt='IntroImg'/>
        </div>
        <div className='content'>
           <p>HI, I'M TOMÁS BARTOLDI.</p>
           <h1>Full Stack Web Developer.</h1>
           <div>
             <Link to='/project' className='btn'>Projects</Link>
             <Link to='/contact' className='btn btn-light'>Contact</Link>
           </div>
        </div>
    </div>
  )
}

export default HeroImg

