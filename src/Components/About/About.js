import React from 'react'
import './About.css'
import about_img from '../../Assets/about.jpeg'
const About = () => {
  return (
    <div className='About Us'>
    <div className='about-left'>
    <img src={about_img} alt="" className='about-img'/>
    </div>
    <div className='about-right'>
    <h3>ABOUT THE TEAM</h3>
    <h2>THE LION OF THE SEA</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam,
       quam et tincidunt, sapien. Quisque, nec, 
       odio, ut, nunc, ac, bibendum, sapien. Nullam, 
       quam et tincidunt, sapien. Quisque, nec, odio,</p>
    <p>ut, nunc, ac, bibendum, sapien. Nullam, quam et tincidunt,
         sapien. Quisque, nec,  odio, ut, nunc, ac, bibendum, 
         sapien. Nullam, quam et tincidunt, sapien. Quisque, nec, 
         odio, ut, nunc, ac, bibendum, sapien.</p>
   </div>
   </div>
  )
}

export default About