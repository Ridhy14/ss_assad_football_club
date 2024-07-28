import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
    <div className='hero-text'>
      <h1>The Pride of Kwale County</h1>
      <p>Nurturing Kwale talents to the top level</p>
      <button className='btn'><a href='Login'>Get Started <img src={dark_arrow} alt=''/></a></button>
    </div>
    </div>
  )
}

export default Hero