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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='social'>
               <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
               <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer