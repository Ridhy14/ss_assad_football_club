import React from 'react'
import './Navibar.css'
import { auth } from '../../../Components/Firebase/Firebase'
import logo from '../../Assets/logor.jpeg'
import cart_icon from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Navibar = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = React.useState("shop");

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate("/Login");;
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  return (
    <div className='navibar'>
      <div className='navi-logo'>
        <img src={logo} alt='' className='logo'/>
        <p>SSASSAD</p>

      </div>
     <ul className='navi-menu'>
        <li onClick={() =>{setMenu("home")}}> <Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("shop")}}><Link to='/Shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
     </ul>
     <div className='navi-login-cart'>
        <button onClick={handleLogout}>Logout</button>
        <Link to='/Cart'><img src={cart_icon} alt=''/></Link>
        <div className='navi-cart-count'>0</div>
     </div>
    </div>
  )
}

export default Navibar