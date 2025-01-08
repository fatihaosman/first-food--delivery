import React from 'react';
import { useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay';
const Home = () => {
/*state variable of name category  satatefunction and initail with string */
  const [category,setCategory]= useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home

