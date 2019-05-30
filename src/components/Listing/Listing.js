import React from "react";
import { Mutation, Query } from "react-apollo";
import { GET_LISTING } from "../../queries/GET_LISTING";
import { DELETELISTING } from "../../mutations/DELETELISTING";
import { GET_USER } from "../../queries/GET_USER";
import { LISTINGS } from "../../queries/LISTINGS";

import { Link } from "@reach/router";
import { Booking } from "../Booking/Booking";
import { MY_LISTINGS } from "../../queries/MY_LISTINGS";
import { ReviewList } from "../ReviewList/ReviewList";
import { CreateReview } from "../CreateReview/CreateReview";
import "./listing.css";

export const Listing = (props) => {
	return (
		<>
			<Query query={GET_LISTING} variables={{ id: props.id }}>
				{({ loading, error, data }) => {
					if (loading) {
						return null;
					}
					if (error) {
						return `Error: ${error}`;
					}
					const { listing } = data;
					if (listing.rating === undefined) {
						listing.rating = 0;
					}
					let totalRating = 0;
					let sumRating = 0;
					if (listing.reviews.length > 0) {
						totalRating = 5 * listing.reviews.length;
						for (let i = 0; i < listing.reviews.length; i++) {
							sumRating = sumRating + listing.reviews[i].rating;
						}
						listing.rating = (sumRating * 5) / totalRating;
					}
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
									let reviewed = false;
									let stayed = false;
									if (listing.reviews.length > 0) {
										for (let i = 0; i < listing.reviews.length; i++) {
											if (listing.reviews[i].author.id === id) {
												reviewed = true;
											} else {
												reviewed = false;
											}
										}
									} else {
										reviewed = true;
									}
									if (listing.bookings.length > 0) {
										for (let i = 0; i < listing.bookings.length; i++) {
											if (listing.bookings[i].author.id === id) {
												stayed = true;
											} else {
												stayed = false;
											}
										}
									} else {
										stayed = false;
									}
									return (
										<React.Fragment>
											{id === listing.author.id ? (
												<React.Fragment>
													<h3>{listing.name}</h3>
													<p>Rating: {listing.rating}</p>
													<p>{listing.category}</p>
													<img
														className="listing-img"
														src={listing.heroUrl}
														alt="hero"
													/>
													<p>{listing.description}</p>
													<p>{listing.price}$ Per night.</p>
													<p>{listing.guests} Guests</p>
													<p>{listing.beds} Beds</p>
													<p>{listing.baths} Baths</p>
													<p>Amenities: {listing.amenities}</p>

													<Link to={`/listing/${props.id}/edit`}>Edit</Link>
													<Mutation
														mutation={DELETELISTING}
														refetchQueries={[
															{
																query: LISTINGS,
																variables: { id: props.id }
															},
															{
																query: MY_LISTINGS
															}
														]}
													>
														{(deleteListing, { loading, error }) => (
															<button
																onMouseUp={() => {
																	deleteListing({
																		variables: {
																			id: props.id
																		}
																	});
																	props.navigate("/dashboard");
																}}
															>
																Delete
															</button>
														)}
													</Mutation>
												</React.Fragment>
											) : (
												<>
													<Booking
														id={props.id}
														price={listing.price}
														bookings={listing.bookings}
													/>
													<h3>{listing.name}</h3>
													<p>Rating: {listing.rating}</p>
													<p>{listing.category}</p>
													<img src={listing.heroUrl} alt="hero" />
													<p>{listing.description}</p>
													<p>{listing.price}$ Per night.</p>
													<p>{listing.guests} Guests</p>
													<p>{listing.beds} Beds</p>
													<p>{listing.baths} Baths</p>
													<p>Amenities: {listing.amenities}</p>
													{reviewed && stayed ? (
														<CreateReview authorId={id} listingId={props.id} />
													) : (
														<p>You've already reviewed this</p>
													)}
													<ReviewList reviews={listing.reviews} />
												</>
											)}
										</React.Fragment>
									);
								}}
							</Query>
						</>
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
		</>
	);
};

export default Listing;
