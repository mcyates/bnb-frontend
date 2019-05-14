import React from "react";
import {Link} from '@reach/router';

export const Dashboard = () => {
	return (
		<>
			<h2>Dashboard</h2>
			<Link to="/listing/create" >Create a new listing</Link>
			<div className="listing-list">
				{
					
				}
			</div>
		</>
	);
};

export default Dashboard;