import React from "react";
import Navbar from "../Navbar/Navbar";
import {Link} from '@reach/router';

export const Dashboard = () => {
	return (
		<>
			<Navbar />
			<h2>Dashboard</h2>
			<Link to="/createListing" >Create a new listing</Link>
		</>
	);
};

export default Dashboard;