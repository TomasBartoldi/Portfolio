import './HeroImg2Styles.css'

import React from 'react'

const HeroImg2 = ({heading, text}) => {
  return (
    <div className='heroe-img'>
        <div className='heading'>
          <h1>{heading}</h1>
          <p>{text}</p>  
        </div>
    </div>
  )
}

export default HeroImg2