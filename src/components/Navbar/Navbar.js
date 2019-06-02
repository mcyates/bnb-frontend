import React from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import airbnbsvg from "../../images/airbnb.svg";
import Logout from "../logout/logout";
import { Query } from "react-apollo";
import { GET_AUTHED } from "../../queries/GET_AUTHED";

const Navbar = () => {
	return (
		<Query query={GET_AUTHED}>
			{({ data: { isAuthed } }) => (
				<nav className="Navbar">
					<div className="leftCorner">
						<Link className="link--logo" to="/">
							<img className="Logo" src={airbnbsvg} alt="airbnb-logo" />
						</Link>
						<Link className="nav-link" to="/about">
							About
						</Link>
					</div>
					<div className="rightCorner">
						{isAuthed ? (
							<>
								<Link className="nav-link" to="/dashboard">
									Dashboard
								</Link>
								<Logout />
							</>
						) : (
							<>
								<Link className="nav-link" to="/register">
									Sign up
								</Link>

								<Link className="nav-link" to="login">
									Log in
								</Link>
							</>
						)}
					</div>
				</nav>
			)}
		</Query>
	);
};

export default Navbar;
