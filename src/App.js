import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Coachingstaff from './Components/Coaching/Coaching'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AuthDetails from './Pages/AuthDetails'
import Navibar from './Pages/Shoppage/Navbar/Navibar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section id='aboutsec'></section>
      <div className='container'>
        <Title subTitle="Top Qualified Coaches" title="Our Coachingstaff"/>
      <Title/>
      <Coachingstaff/>
      <About/>
      <Title subTitle="Get in touch" title="Contact Us "/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )

  const Login =() =>{
    return(
      <div>
    <Login/>
      <Register/>
      <AuthDetails/>
      </div>
    );
  } 
  const Shoppage=() =>{
    return(
      <div>
        <BrowserRouter>
        <Shoppage/>
        <Navibar/>
        <Routes>
          <Route path='/men' element={<ShopCategory category="men"/>}/>
          <Route path='/women' element={<ShopCategory category="womens"/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='Cart' element={<Cart/>}/>

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
