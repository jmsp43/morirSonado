import React from "react";
import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ItemInfo from "../pages/ItemInfo";

function FoodItem({ foodItem }) {
  return (
    <div className="itemOnMenu">
      <h3><Link to={`/menu/${foodItem.name}`}>{foodItem.name}</Link></h3>
      <span> </span>
      <h4>${foodItem.price}</h4>

      </div>
  );
}

export default FoodItem;
