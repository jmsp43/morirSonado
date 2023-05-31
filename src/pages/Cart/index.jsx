import React from 'react'
import CustomerCart from '../../components/CustomerCart'
// import { createOrder } from '../../services/orders-api'

function Cart({ cart, updateAddCart, updateDeleteCart, quantity, increaseQuant, decreaseQuant }) {
  
  const makeNewOrder = (event) => {
    event.preventDefault()
    const order = event.target.description.value
    console.log(order)
}


  return (
      <div className='homePageCont'>
      <div className='belowNav'>
            <h1>Your Order</h1>
        <h2>We aim to please!</h2>


        <CustomerCart cart={cart} updateAddCart={updateAddCart}
          updateDeleteCart={updateDeleteCart}
          quantity = {quantity}
          increaseQuant={increaseQuant}
          decreaseQuant={decreaseQuant}/>
            

      </div>
</div>
  )
}

export default Cart