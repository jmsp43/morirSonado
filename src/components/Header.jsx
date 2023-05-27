import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img src={logo} />
      <h1>Morir Soñando</h1>
      <h2>Authentic Dominican Cuisine</h2>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/menu" className="link">Order Here</Link>
        <Link to="/login" className="link">Login</Link>
        <Link to="/signUp" className="link">Sign Up</Link>
        <Link to="/cart" className="link">View Cart</Link>
        <Link to="/catering" className="link">Catering</Link>
      </nav>
    </div>
  );
};

export default Header;
