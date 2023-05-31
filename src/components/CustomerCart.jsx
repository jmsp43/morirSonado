import React, { useEffect } from 'react'
import { editOrder } from '../services/orders-api'

const CustomerCart = ({ cart, updateAddCart, updateDeleteCart}) => {
      let filteredCart = []

      const filterDuplicates = (cartArr) => {
            return filteredCart = cartArr.filter((plate,
                  index) => cartArr.indexOf(plate) === index)
      }

      const updatedQuant = {
            //amountOrdered: 
            //however many times it was repeated before filterong put duplicates
      }
      //editOrder(id, updatedQuant)

      useEffect(() => {
            filterDuplicates(cart)
      },[cart])

let total = 0

  return (
        <div className='cartDiv'>
              {cart.length === 0 ? <h3>Your Cart is Empty!</h3> : <h3>Items in Your Cart: {filterDuplicates(cart).map(plate => {
                    total += plate.price
                    return (
                          <div className = 'cartItem' key={plate._id}>
                                <br/>
                                {plate.name}
                                <br/>
                                ({plate.description})
                                <br/>
                                ${plate.price}
                                <br />
                                Quantity: 
                        </div>
                    )
              }
              )}</h3>}
              <h4>Total: ${total}</h4>
              <br/>
              <button>Check out</button>
        </div>
  )
}

export default CustomerCart