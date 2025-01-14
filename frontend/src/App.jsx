import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {
/*This state controls whether the LoginPopup component is visible. Initially, it’s set to false (hidden) */
  const [showLogin,setShowLogin] =useState(false)
  return (

   <>
{  /* If showLogin is true, the LoginPopup component is rendered. Otherwise, nothing (null) is displayed. This allows toggling the visibility of the popup based on the state. */}
   {showLogin?<LoginPopup setShowLogin={setShowLogin}/> :<></>}
    <div className='app'>
{     /*The setShowLogin function is passed as a prop to Navbar. */}
      <Navbar setShowLogin={setShowLogin}/>
        <Routes>
           <Route path='/'  element={<Home/>} />  
           <Route path='/cart' element={<Cart/>} />
           < Route path='/order'element={<PlaceOrder/>} />
        </Routes>  
    </div>
     <Footer />
   </>
  )
}

export default App