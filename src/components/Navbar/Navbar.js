import React from "react";
import { Link } from '@reach/router';
import "./Navbar.css";
import airbnbsvg from "../../images/airbnb.svg";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="/">
        <img className="Logo" src={airbnbsvg} alt="airbnb-logo" />
      </a>
      <ul className="rightCorner">
        <Link to="/" >Become a host</Link>
        <Link to="/" >Help</Link>
        <Link to="/register" >Sign up</Link>
        <Link to="login" >Log in</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
