import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
{/*usestate is also imported from react
   adding underlining effect on the links(ul-li), [state variable,setter function]
  we have created state var name and intialized it with home */}
    const[menu,setMenu]=useState("home");

  return (
    <div className='navbar'>     {/* our main starting div holding everything */}
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>{/* we have class-name if our menu is home the home will be active if not then provide an empty string*/}
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile app")} className={menu==="mobile app"?"active":""}>mobile app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">    {/* navbar holding contents on  the right div*/}
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>   {/* another div */}
            </div>
            <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar