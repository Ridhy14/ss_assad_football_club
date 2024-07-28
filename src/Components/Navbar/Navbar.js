import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logor.jpeg'
import menu_icon from '../../Assets/menu-icon.png'
import { Link } from 'react-scroll'
import {} from 'react-router-dom'



const Navbar = () =>{
  
  const[sticky, setSticky] = useState(false);
  useEffect(()=>{
      window.addEventListener('scroll' ,() => {
          if(window.scrollY > 50){
              setSticky(true);
          }else{
              setSticky(false);
          }
      });
  }, []);
  const[mobileMenu,setMobileMenu] =useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }
  return (
    <nav className={`container ${ sticky? 'dark-nav': ''}`}>
     <img src={logo} alt="" className='logo'/> 
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><a href='/'>Home</a></li>
        <li><Link to='coaching'smooth={true} offset={-300} duration={500} >Coachingstaff</Link></li>
        <li><a href='Shop'>Shop</a></li>
        <li><Link to='About Us'smooth={true} offset={-160} duration={500} >About us</Link></li>
        <li><Link  to='contact'smooth={true} offset={-250} duration={500}
        >Contact us</Link></li>
        <li><a href='Login' className='btn'>
        Login</a></li>
    </ul>
    <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar