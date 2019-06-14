import React from "react";
import { Query } from "react-apollo";

import { GET_LISTING } from "../../queries/GET_LISTING";
import { GET_USER } from "../../queries/GET_USER";

import Author from "./ternary/Author";
import Guest from "./ternary/Guest";

import reviewUtils from "../../utils/review";
import ratingUtil from "../../utils/ratings";

import "./listing.css";

export const Listing = (props) => {
	return (
		<React.Fragment>
			<Query query={GET_LISTING} variables={{ id: props.id }}>
				{({ loading, error, data }) => {
					if (loading) {
						return null;
					}
					if (error) {
						return `Error: ${error}`;
					}
					const { listing } = data;

					const totalRating = ratingUtil.totalRating(listing, 5);
					const sumRating = ratingUtil.sumRating(listing);

					listing.rating = ratingUtil.getRating(sumRating, totalRating, 5);

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
									const { id } = data;
									let reviewed = reviewUtils.hasReviewed(listing, id);
									let stayed = reviewUtils.hasStayed(listing, id);
									console.log(reviewed, stayed);
									return (
										<div className="listing">
											{id === listing.author.id ? (
												<Author listing={listing} id={props.id} />
											) : (
												<Guest
													reviewed={reviewed}
													stayed={stayed}
													id={props.id}
													authorId={id}
													listing={listing}
												/>
											)}
										</div>
									);
								}}
							</Query>
						</>
					);
				}}
			</Query>
		</React.Fragment>
	);
};

export default Listing;
