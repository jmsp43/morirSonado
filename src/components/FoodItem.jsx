import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemInfo from "../pages/ItemInfo";
import { useParams, useNavigate } from "react-router-dom";
import { getItem, editOrder } from "../services/orders-api";

function FoodItem({ foodItem }) {

  const {id} = useParams()
  const nav = useNavigate()
  const [data, setData] = useState({})

  useEffect(() => {
      getItem(id) // getting the todo that matches this id
      .then(res => setData(res.data))
  }, [])

  const editTheItem = event => {
      event.preventDefault()
    const updatedItem = {
      name: foodItem.name,
      description: foodItem.description,
      price: event.target.price.value
    }
      editOrder(id, updatedItem).then(() => nav(`/menu`))
 
   }



  return (
    <div className="itemOnMenu">
        <form onSubmit={editTheItem}>
            Name:<input type='text' name='name' defaultValue={data.name}/>
        Description:<input type='text' name='description' defaultChecked={data.description} />
        Price:<input type='number' name='price' defaultChecked={data.price} />
            <input type='submit' />
        </form>
      <br/>
      <h3><Link to={`/menu/${foodItem.name}`}>{foodItem.name}</Link></h3>
      <span> </span>
      <h4>${foodItem.price}</h4>

      </div>
  );
}

export default FoodItem;
