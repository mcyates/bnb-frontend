import React from "react";
import {Link} from '@reach/router';

export const Dashboard = () => {
	return (
		<>
			<h2>Dashboard</h2>
			<Link to="/createListing" >Create a new listing</Link>
		</>
	);
};

export default Dashboard;