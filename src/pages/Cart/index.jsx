import React from 'react'
import CustomerCart from '../../components/CustomerCart'

function Cart({cart, updateAddCart, updateDeleteCart}) {
  return (
      <div className='homePageCont'>
      <div className='belowNav'>
            <h1>Your Order</h1>
            <h2>We aim to please!</h2>
        <CustomerCart cart={cart} updateAddCart={updateAddCart}
          updateDeleteCart={updateDeleteCart}/>
            
      </div>
</div>
  )
}

export default Cart