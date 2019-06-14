import React from "react";

import { Booking } from "../../Booking/Booking";
import { ReviewList } from "../../ReviewList/ReviewList";
import { CreateReview } from "../../CreateReview/CreateReview";

import avatarSVG from "../../../images/avatar.svg";
import bedSvg from "../../../images/bed-3.svg";
import bathSvg from "../../../images/shower.svg";

export const Guest = (props) => {
	const { listing, reviewed, stayed, authorId } = props;
	return (
		<React.Fragment>
			<img className="listing-img" src={listing.heroUrl} alt="hero" />
			<h3 className="listing-name">{listing.name}</h3>
			<Booking
				id={props.id}
				price={listing.price}
				bookings={listing.bookings}
			/>
			<div className="listing-cat">
				<p>Rating: {listing.rating}</p>
				<p>{listing.category}</p>
			</div>
			<p className="listing-desc">{listing.description}</p>
			<div className="listing-info">
				<p className=" listing-card-p">
					<span className="listing-svg-box">$</span>
					{listing.price}
				</p>
				<p className=" listing-card-p">
					<span className="listing-svg-box">
						<img
							className="listing-info-svg"
							src={avatarSVG}
							alt="guest icon"
						/>
					</span>
					{listing.guests}
				</p>
				<p className=" listing-card-p">
					<span className="listing-svg-box">
						<img className="listing-info-svg" src={bedSvg} alt="bed icon" />
					</span>
					{listing.beds}
				</p>
				<p className=" listing-card-p">
					<span className="listing-svg-box">
						<img className="listing-info-svg" src={bathSvg} alt="bath icon" />
					</span>
					{listing.baths}
				</p>
			</div>
			<p className="listing-amenities">Amenities: {listing.amenities}</p>
			{reviewed === false && stayed ? (
				<CreateReview authorId={authorId} listingId={props.id} />
			) : (
				<p className="createReview">You've already reviewed this</p>
			)}
			<ReviewList reviews={listing.reviews} />
		</React.Fragment>
	);
};

export default Guest;
