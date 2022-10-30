import React from 'react'
import './FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
          <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                <div>
                    <p>Buenos Aires, </p>
                    <p>Argentina.</p>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                (+54) 9 11-6888-1990</h4>
                
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                bartoldit@gmail.com</h4>
                
            </div>
          </div>

          <div className='right'>
            <h4>About me</h4>
            <p>I am a Full Stack Developer looking for a job where I can develop myself and grow in knowledge</p>
            <div className='social'>
              <a href='https://github.com/TomasBartoldi'>
              <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
              </a>
               <a href='https://www.linkedin.com/in/tomas-bartoldi-395818242/'>
               <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
               </a>
               
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer