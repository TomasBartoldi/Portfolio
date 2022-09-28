import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import React1 from '../components/assets/react1.png'


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a React Front-End Developer. I create responsive secure websites.</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack bottom'>
                    <img src={React1} className='img' alt='true' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent