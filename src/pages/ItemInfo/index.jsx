import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItem } from "../../services/orders-api";

const ItemInfo = () => {
  const [plate, setPlate] = useState({});
  const [quantity, setQuantity] = useState(0)
  const [cart, setCart] = useState([])


  let { name } = useParams()

      useEffect(() => {
       fetchData()
      }, [])

  async function fetchData() {
    let result = await getItem(name)
    setPlate(result.data[0])
  }

  const addToCart = () => {
    setQuantity((quantity) => quantity + 1)
    setCart([...cart, plate])
    console.log(cart)
  }

  const deleteFromCart = () => {
    setQuantity((quantity) => quantity - 1)
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
