import React from "react";

import { Link } from "@reach/router";
import { Query } from "react-apollo";
import { MY_LISTINGS } from '../../queries/MY_LISTINGS';
import { GET_USER } from "../../queries/GET_USER";

export const Dashboard = () => {
	return (
		<>
			<Query query={GET_USER}>
				{({ loading, error, data }) => {
					if (loading) {
						return null;
					}
					if (error) {
						return `Error: ${error}`;
					}
					return (
						<Query query={MY_LISTINGS} pollInterval={5000}>
							{({ loading, error, data }) => {
								if (loading) {
									return null;
								}
								if (error) {
									return `Error: ${error}`;
								}
								return (
									<>
										{data.mylistings.map((listing) => {
											const url = `/listing/${listing.id}`;
											return (
												<Link key={listing.id} to={url}>
													<div>
														{listing.heroUrl ? (
															<img
																src={listing.heroUrl}
																alt={`Listing Hero ${listing.id}`}
															/>
														) : (
															<></>
														)}
														<h3>{listing.name}</h3>
													</div>
												</Link>
											);
										})}
									</>
								);
							}}
						</Query>
					);
				}}
			</Query>
			<h2>Dashboard</h2>
			<Link to="/listing/create">Create a new listing</Link>
		</>
	);
};

export default Dashboard;