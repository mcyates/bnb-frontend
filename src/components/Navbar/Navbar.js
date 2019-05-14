import React from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import airbnbsvg from "../../images/airbnb.svg";
import Logout from "../Logout/logout";
import { Query } from "react-apollo";
import { authQuery } from "../../localstore/isAuthed";

const Navbar = () => {
	return (
    <Query query={authQuery}>
    {({data: {isAuthed}}) => (
      <nav className="Navbar">
      <Link className="link--logo" to="/">
        <img className="Logo" src={airbnbsvg} alt="airbnb-logo" />
      </Link>
      <div className="rightCorner">
        {
          isAuthed ? (
            <>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            <Logout />
            </>
          ) : (
            <>
            <Link className="nav-link" to="/register">Sign up</Link>
            <Link className="nav-link" to="login">Log in</Link>
            </>
          )
        }
          </div>
      </nav>
    )}

		</Query>
	);
};

export default Navbar;
