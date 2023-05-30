import React from 'react'
import { useState, useRef } from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function FoodItem({ foodItem }) {


  return (
<Link to={`/menu/${foodItem.name}`} className='itemOnMenu'>
      <h3>{foodItem.name}</h3>
      <span> </span>
      <h4>${foodItem.price}</h4>
    </Link>
  )
}

export default FoodItem