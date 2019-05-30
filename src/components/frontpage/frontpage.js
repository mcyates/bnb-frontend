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

				<div>
					Icons made by{" "}
					<a
						href="https://www.flaticon.com/authors/smashicons"
						title="Smashicons"
					>
						Smashicons
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>{" "}
					is licensed by{" "}
					<a
						href="http://creativecommons.org/licenses/by/3.0/"
						title="Creative Commons BY 3.0"
						target="_blank"
						rel="noopener noreferrer"
					>
						CC 3.0 BY
					</a>
				</div>
			</div>
		);
	}
}

export default FrontPage;
