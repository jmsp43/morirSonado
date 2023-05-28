import React from 'react'
import { Link } from "react-router-dom";

function FoodItem({foodItem}) {
  return (
    <div className='itemOnMenu'>
      <h3>{foodItem.name}</h3>
      <span> </span>
      <h4>${foodItem.price}</h4>
    </div>
  )
}

export default FoodItem