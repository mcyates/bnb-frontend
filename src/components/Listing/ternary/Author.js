import React from "react";
import { Link } from "@reach/router";
import { Mutation } from "react-apollo";

import { DELETELISTING } from "../../../mutations/DELETELISTING";
import { MY_LISTINGS } from "../../../queries/MY_LISTINGS";
import { LISTINGS } from "../../../queries/LISTINGS";
import { ReviewList } from "../../ReviewList/ReviewList";

import avatarSVG from "../../../images/avatar.svg";
import bedSvg from "../../../images/bed-3.svg";
import bathSvg from "../../../images/shower.svg";

export const Author = (props) => {
	const { listing } = props;
	return (
		<React.Fragment>
			<div>
				<img className="listing-img" src={listing.heroUrl} alt="hero" />
				<h3 className="listing-name">{listing.name}</h3>
				<div className="listing-cat">
					<p>Rating: {listing.rating}</p>
					<p>{listing.category}</p>
				</div>
				<p className="listing-desc">{listing.description}</p>
				<div className="listing-info">
					<p className="listing-card-price listing-card-p">
						<span className="listing-svg-box">$</span>
						{listing.price}
					</p>
					<p className="listing-card-guests listing-card-p">
						<span className="listing-svg-box">
							<img
								className="listing-info-svg"
								src={avatarSVG}
								alt="guest icon"
							/>
						</span>
						{listing.guests}
					</p>
					<p className="listing-card-beds listing-card-p">
						<span className="listing-svg-box">
							<img className="listing-info-svg" src={bedSvg} alt="bed icon" />
						</span>
						{listing.beds}
					</p>
					<p className="listing-card-baths listing-card-p">
						<span className="listing-svg-box">
							<img className="listing-info-svg" src={bathSvg} alt="bath icon" />
						</span>
						{listing.baths}
					</p>
				</div>
				<p className="listing-amenities">Amenities: {listing.amenities}</p>
			</div>
			<ReviewList reviews={listing.reviews} />
			<div className="listing-buttons">
				<Link className="btn" to={`/listing/${props.id}/edit`}>
					Edit
				</Link>
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
							className="btn"
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
			</div>
		</React.Fragment>
	);
};

export default Author;
