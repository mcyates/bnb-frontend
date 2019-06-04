import React from "react";

import { Query } from "react-apollo";
import { MY_LISTINGS } from "../../queries/MY_LISTINGS";
import { GET_USER } from "../../queries/GET_USER";
import { ListingList } from "../listingList/ListingList";
import { Link } from "@reach/router";
import { MY_BOOKINGS } from "../../queries/MY_BOOKINGS";

export const Dashboard = () => {
	return (
		<div className="dashboard">
			<Link className="btn" to="/listing/create">
				Create a new listing
			</Link>
			<Query query={MY_BOOKINGS}>
				{({ loading, error, data }) => {
					if (loading) {
						return null;
					}
					if (error) {
						return `Error: ${error}`;
					}
					const bookings = data.mybookings;
					return (
						<div>
							{bookings.map((booking) => (
								<div key={booking.id}>
									<h4>{booking.listing.name}</h4>
									<p>
										<span>{booking.startDate}</span>
										<span>{booking.endDate}</span>
									</p>
								</div>
							))}
						</div>
					);
				}}
			</Query>
			<Query query={GET_USER}>
				{({ loading, error, data }) => {
					if (loading) {
						return null;
					}
					if (error) {
						return `Error: ${error}`;
					}
					return (
						<Query
							query={MY_LISTINGS}
							variables={{
								first: 10,
								skip: 0
							}}
						>
							{({ loading, error, data, fetchMore }) => {
								if (loading) {
									return null;
								}
								if (error) {
									return `Error: ${error}`;
								}
								const listings = data.mylistings;
								let cursor = "";
								if (listings.length !== 0) {
									cursor = listings[listings.length - 1].id;
								}
								return (
									<React.Fragment>
										<ListingList
											entries={listings}
											onLoadMore={() => {
												fetchMore({
													variables: {
														after: cursor
													},
													updateQuery: (prevResult, { fetchMoreResult }) => {
														let newListings = fetchMoreResult.mylistings;

														if (newListings.length) {
															cursor = newListings[newListings.length - 1].id;
														}
														return Object.assign({}, prevResult, {
															mylistings: [
																...prevResult.mylistings,
																...newListings
															]
														});
													}
												});
											}}
										/>
									</React.Fragment>
								);
							}}
						</Query>
					);
				}}
			</Query>
		</div>
	);
};

export default Dashboard;
