
import React from "react";
import { Mutation, Query } from "react-apollo";
import { GET_LISTING } from "../../queries/getListing";
import { DELETELISTING } from "../../mutations/DeleteListing";
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
					console.log(props);
					return (
						<>
							<h3>{listing.name}</h3>
							<p>{listing.category}</p>
							<img src={listing.heroUrl} alt="hero" />
							<p>{listing.description}</p>
							<p>{listing.price}$ Per night.</p>
							<p>{listing.guests} Guests</p>
							<p>{listing.beds} Beds</p>
							<p>{listing.baths} Baths</p>
							<p>Amenities: {listing.amenities}</p>
							<Link to={`/listing/${props.id}/edit`}>Edit</Link>
						</>
					);
				}}
			</Query>
			<Mutation
				mutation={DELETELISTING}
				onCompleted={(e) => {
					console.log(e);
				}}
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
	);
};

export default Listing;

// pollInterval={10000}
