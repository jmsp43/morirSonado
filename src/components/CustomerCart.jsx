import React from 'react'
import { useState } from 'react'

const CustomerCart = () => {
      const [cart, setCart] = useState(null)
      //get info from increase/decrease buttons to set state with


  return (
        <div>
              {cart === null ? <p>Your Cart is Empty!</p> : <p>Items in Your Cart:</p>}
              <br />
              <p>Stuff in cart goes here</p>
        </div>
  )
}

export default CustomerCart