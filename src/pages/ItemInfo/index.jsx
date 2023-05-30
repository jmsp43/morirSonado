import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemInfo = ({ item }) => {
      const [plate, setPlate] = useState({})
  
      useEffect(() => {
        getItem()
            //calling to get data
                .then(res => setPlate(res.data))
            //setting the state with returned data
      }, [])
      
      // const [quantity, setQuantity] = useState(0)

      const handleDecrease = (event) => {
        event.preventDefault()
        console.log(foodItem.amountOrdered)
        foodItem['amountOrdered'] = foodItem.amountOrdered--
        console.log('decreased, '+ foodItem.amountOrdered)
      }
    
      const handleIncrease = (event) => {
        event.preventDefault()
        console.log(foodItem.amountOrdered)
        foodItem['amountOrdered'] = foodItem.amountOrdered++
        console.log('increased, '+ foodItem.amountOrdered)
      }
  return (
        <div>
                    <button className= 'decrease quantityBtn' onClick={handleDecrease}>-</button>
      <span> {foodItem.amountOrdered} </span>
      <button className='increase quantityBtn' onClick = {handleIncrease}>+</button>
            <p>info about item</p>
    </div>
  )
}

export default ItemInfo