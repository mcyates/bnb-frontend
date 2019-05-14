import React from "react";
import {Link} from '@reach/router';
import { Query } from "react-apollo";
import {LISTINGS} from '../../queries/getListings';
export const Dashboard = () => {
	return (
		<>
			<h2>Dashboard</h2>
			<Link to="/listing/create">Create a new listing</Link>
			<Query query={LISTINGS}>
			{({loading, error, data, fetchMore}) => {
				if (loading) {
					return null;
				}
				if (error) {
					return `Error: ${error}`
				}
				console.log(data.listings)
				return (
					<>
					{data.listings.map((listing) => {
						const url = `/listing/${listing.id}`;
						return (
							<Link key={listing.id} to={url}>
								<div>
								<h3>{listing.name}</h3>
								</div>
							</Link>
						)
					})}
					</>
				)
			}}
			</Query>
		</>
	);
};

export default Dashboard;