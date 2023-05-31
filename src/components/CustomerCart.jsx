import React from 'react'

const CustomerCart = ({ cart, updateAddCart, updateDeleteCart }) => {
      
      

  return (
        <div className='cartDiv'>
              {cart === null ? <p>Your Cart is Empty!</p> : <h3>Items in Your Cart: {cart.map(plate => {
                    return (
                          <div className = 'cartItem' key={plate._id}>
                                <br/>
                                {plate.name}
                                <br/>
                                ({plate.description})
                                <br/>
                                ${plate.price}
                                <br/>
                        </div>
                    )
              }
              )}</h3>}
              <br />
              <p>Stuff in cart goes here</p>
        </div>
  )
}

export default CustomerCart