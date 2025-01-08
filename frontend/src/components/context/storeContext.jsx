import React, { createContext, useState } from "react";
// import { createContext } from "react";

import { food_list } from "../../assets/assets";
/*setting up the context API -heading when we started */
export const  StoreContext = createContext(null)  /*created one contex called storecontext */

const[cartItems,setCartItems]=useState({})

/*function for adding anad removing from cart */

const StoreContextProvider =(props)=>{  /*store context provider function*/

  const addToCart =(itemId) =>{
    /*user adding for the first time */
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

    /*creating a variable contextValue */
    const contextValue={
        /*we can provide any  value/function  and we can aceessin any function using context*/
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(/*SOMETHING SORT OF ACCESSING IT IN ANY COMPONENT */
      <StoreContext.Provider value={contextValue}  >
      {props.children}
      </StoreContext.Provider>
    )
}
export default StoreContextProvider