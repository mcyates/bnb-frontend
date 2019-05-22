import React from "react";
import { Mutation, Query } from "react-apollo";
import { GET_LISTING } from "../../queries/GET_LISTING";
import { DELETELISTING } from "../../mutations/DeleteListing";
import {GET_USER} from '../../queries/GET_USER';
import { LISTINGS } from "../../queries/LISTINGS";
import { Link } from "@reach/router";

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
					console.log(listing)
					return (
						<>
						<Query query={GET_USER} >
							{({loading, error, data}) => {
								if (loading) {
									return null;
								}
								if (error) {
									return `Error: ${error}`;
								}
								const {id} = data;
								return (
									<>{
										id === listing.author.id ? (
											<>
											<Link to={`/listing/${props.id}/edit`}>Edit</Link>
											<Mutation
											mutation={DELETELISTING}
											refetchQueries={[
												{
													query: LISTINGS,
													variables: { id: props.id }
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
										</>
										) : (
											<div>Book!</div>
										)
									}</>
								)
							}}
							</Query>
							<h3>{listing.name}</h3>
							<p>{listing.category}</p>
							<img src={listing.heroUrl} alt="hero" />
							<p>{listing.description}</p>
							<p>{listing.price}$ Per night.</p>
							<p>{listing.guests} Guests</p>
							<p>{listing.beds} Beds</p>
							<p>{listing.baths} Baths</p>
							<p>Amenities: {listing.amenities}</p>
							
						</>
					);
				}}
			</Query>


		</>
	);
};

export default Listing;
