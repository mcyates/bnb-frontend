import React, { Component } from "react";
import { Query } from "react-apollo";

import { Hero } from "../Hero/Hero";
import { ListingList } from "../listingList/ListingList";
import { LISTINGS } from "../../queries/LISTINGS";
import "./frontpage.css";

class FrontPage extends Component {
	render() {
		return (
			<div className="front">
				<Hero />
				<Query
					query={LISTINGS}
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

						const { listings } = data;
						let cursor = listings[listings.length - 1].id;

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
												let newListings = fetchMoreResult.listings;

												if (newListings.length) {
													cursor = newListings[newListings.length - 1].id;
												}
												return Object.assign({}, prevResult, {
													listings: [...prevResult.listings, ...newListings]
												});
											}
										});
									}}
								/>
							</React.Fragment>
						);
					}}
				</Query>
			</div>
		);
	}
}

export default FrontPage;
