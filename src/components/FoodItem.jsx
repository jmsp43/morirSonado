import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editItem } from "../services/orders-api";

function FoodItem({ foodItem }) {
  const id = foodItem._id;
  const nav = useNavigate();

  const editTheItem = (event) => {
    event.preventDefault();
    const updatedItem = {
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
    };
    editItem(id, updatedItem).then(() => nav("/"));
  };

  return (
    <div className="itemOnMenu">
      <form onSubmit={editTheItem}>
        Name:
        <input type="text" name="name" defaultValue={foodItem.name} />
        Description:
        <input
          type="text"
          name="description"
          defaultValue={foodItem.description}
        />
        Price:
        <input type="number" name="price" defaultValue={foodItem.price} />
        <input type="submit" />
      </form>
      <br />
      <h3>
        <Link to={`/menu/${foodItem.name}`}>{foodItem.name}</Link>
      </h3>
      <span> </span>
      <h4>${foodItem.price}</h4>
    </div>
  );
}

export default FoodItem;
