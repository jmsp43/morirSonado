import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItem } from "../../services/orders-api";

const ItemInfo = ({cart, updateAddCart, updateDeleteCart}) => {
  const [plate, setPlate] = useState({});
  const [quantity, setQuantity] = useState(0)

  let { name } = useParams()

      useEffect(() => {
       fetchData()
      }, [])

  async function fetchData() {
    console.log(name)
    let result = await getItem(name)
    setPlate(result.data[0])
    console.log(result)
  }

  const addToCart = () => {
    setQuantity((quantity) => quantity + 1)
    updateAddCart(plate)
  }

  const deleteFromCart = () => {
    setQuantity((quantity) => quantity - 1)
    updateDeleteCart()
  }


  return (
    <div>
      {plate ?
        <div className="plate">
          <h3>{plate.name}</h3>
          <p>${plate.price}</p>
          <p>{plate.description}</p>
          <p>Show image here</p>
          <div className="inCart">
            <button className="decrease" onClick={deleteFromCart}>-
        </button>
            <span> {quantity} in your cart </span>
            <button className="increase" onClick={addToCart}>+
        </button>
          </div>

        </div>
        : <p>Not found</p>}
    </div>
  );
};

export default ItemInfo;
