import React from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import airbnbsvg from "../../images/airbnb.svg";
import Logout from "../logout/logout";
import { Query } from "react-apollo";
import { authQuery } from "../../localstore/isAuthed";

const Navbar = () => {
	return (
    <Query query={authQuery}>
    {({data: {isAuthed}}) => (
      <nav className="Navbar">
      <a href="/">
        <img className="Logo" src={airbnbsvg} alt="airbnb-logo" />
      </a>
      <ul className="rightCorner">
        <Link to="/">Become a host</Link>
        <Link to="/">Help</Link>
        {
          isAuthed ? (
            <Logout />
          ) : (
            <>
            <Link to="/register">Sign up</Link>
            <Link to="login">Log in</Link>
            </>
          )
        }
          </ul>
      </nav>
    )}

		</Query>
	);
};

export default Navbar;
