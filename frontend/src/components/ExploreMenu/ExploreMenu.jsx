import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
/*destucturing category */
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore our menu</h1>
       <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes.our mission is to satisfy your cravings and elevate your dining experience. one delicious meal at a time</p>
       <div className="explore-menu-list">
          {/*we will render the menu-list using the map methos */ } 
          {menu_list.map((item,index)=>{      /* firts carly braces is due tojsx like js code must be wrapped in braces, while second one is due to the multiline*/
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name? "active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
          })}
       </div>
       <hr />
    </div>
  )
}

export default ExploreMenu

/*FIRST
Here’s how the statement works step by step when clicked:

User Clicks:

The onClick event is triggered.
Arrow Function Runs:

The arrow function calls setCategory with a callback function.
Callback Evaluates prev:

The current value of category (prev) is compared with the clicked item's menu_name.
Condition Checks:

If prev === item.menu_name → Reset to "All".
Otherwise, update to the clicked menu_name.
State Updates:

The setCategory function updates the category state, and React re-renders the component. */