import React from 'react'
import { ShowFood } from '../../components/ShowFood'
import { useRef, useState } from 'react'


function Menu() {
  const [clickedFoodType, setClickedFoodType] = useState(null)

  const handleClick = (event) => {
    event.preventDefault()
    setClickedFoodType(event.target.value.toLowerCase())
    // clickedFood = clickedFood.toLowerCase()
  }

  return (
      <div className='homePageCont'>
      <div className='belowNav'>
            <h1>Menu</h1>
        <nav>
          <ul className='menuNav'>
            <button onClick={handleClick} value={'Appetizers'}>Appetizers</button>
            <button onClick ={handleClick} value = {'Entrees'}>Entrees</button>
            <button onClick ={handleClick} value = {'Combos'}>Combos</button>
            <button onClick ={handleClick} value = {'Beverages'}>Beverages</button>
            <button onClick ={handleClick} value = {'Desserts'}>Desserts</button>
          </ul>
        </nav>
        <ShowFood
          foodType={clickedFoodType} />
      </div>
</div>
  )
}

export default Menu