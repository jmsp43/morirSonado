import React, { useEffect } from 'react'
import { editOrder } from '../services/orders-api'
import { useState } from 'react'
import { createOrder } from '../services/orders-api'

const CustomerCart = ({ cart, updateAddCart, updateDeleteCart}) => {
      let filteredCart = []
      const [price, setPrice] = useState(0)

      const filterDuplicates = (cartArr) => {
            return cartArr.filter((plate,
                  index) => cartArr.indexOf(plate) === index)
      }

      const updatedQuant = {
            //amountOrdered: 
            //however many times it was repeated before filterong put duplicates
      }
      //editOrder(id, updatedQuant)

      useEffect(() => {
            filterDuplicates(cart)
            let totalPrice = 0
            for (let i = 0; i < cart.length; i++) {
                  totalPrice += cart[i].price
            }
            setPrice(totalPrice)
      },[cart])


      async function handleSubmit(event) {
            event.preventDefault()
            let obj = {
                  price: price,
                  items: filterDuplicates(cart)
            }
            await createOrder(obj)
            console.log('submit done')
      }

  return (
        <div className='cartDiv'>
              <form onSubmit = {handleSubmit}>
                    <input type = 'submit'/>
            </form>
              


              {cart.length === 0 ? <h3>Your Cart is Empty!</h3> : <h3>Items in Your Cart: {filterDuplicates(cart).map(plate => {
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
              <h4>Total: ${price}</h4>
              <br/>
              
        </div>
  )
}

export default CustomerCart