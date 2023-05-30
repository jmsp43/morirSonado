import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItem } from "../../services/orders-api";

const ItemInfo = () => {
  const [plate, setPlate] = useState({});

  let { name } = useParams()

      useEffect(() => {
       fetchData()
      }, [])

  async function fetchData() {
    
    let result = await getItem(name)
    setPlate(result.data[0])
    console.log(result)
    console.log(plate)
  }

  // const [quantity, setQuantity] = useState(0)

  const handleDecrease = (event) => {
    event.preventDefault();
    console.log(foodItem.amountOrdered);
    foodItem["amountOrdered"] = foodItem.amountOrdered--;
    console.log("decreased, " + foodItem.amountOrdered);
  };

  const handleIncrease = (event) => {
    event.preventDefault();
    console.log(foodItem.amountOrdered);
    foodItem["amountOrdered"] = foodItem.amountOrdered++;
    console.log("increased, " + foodItem.amountOrdered);
  };

  return (
    <div>
      {plate ?
        <div>
          <h3>{plate.name}</h3>
          <p>${plate.price}</p>
          <p>{plate.description}</p>
          <p>Show image here</p>
          <div className="inCart">
            <a>-</a>
            <span> {plate.amountOrdered} in your cart </span>
            <a>+</a>
          </div>

        </div>
        : <p>Not found</p>}
    </div>
  );
};

export default ItemInfo;
