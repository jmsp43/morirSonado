import React, { useEffect } from 'react'

const CustomerCart = ({ cart, updateAddCart, updateDeleteCart }) => {
      let filteredCart = []

      const findDuplicates = (cartArr) => {
            return filteredCart = cartArr.filter((plate,
                  index) => cartArr.indexOf(plate) === index);
      }

      useEffect(() => {
            findDuplicates(cart)
      },[])

  return (
        <div className='cartDiv'>
              {cart.length === 0 ? <h3>Your Cart is Empty!</h3> : <h3>Items in Your Cart: {findDuplicates(cart).map(plate => {
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
        </div>
  )
}

export default CustomerCart