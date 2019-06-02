import React, { useEffect } from "react";
import { Link } from "@reach/router";

import bedSvg from "../../images/bed-3.svg";
import bathSvg from "../../images/shower.svg";
import avatarSVG from "../../images/avatar.svg";
import "./listingList.css";

export const ListingList = (props) => {
	useEffect(() => {
		window.addEventListener("scroll", handleOnScroll);

		return () => {
			window.removeEventListener("scroll", handleOnScroll);
		};
	});

	const handleOnScroll = () => {
		const scrollTop =
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
		const scrollHeight =
			(document.documentElement && document.documentElement.scrollHeight) ||
			document.body.scrollHeight;
		const clientHeight =
			document.documentElement.clientHeight || window.innerHeight;
		const scrolledToBottom =
			Math.ceil(scrollTop + clientHeight) >= scrollHeight;
		if (scrolledToBottom) {
			props.onLoadMore();
		}
	};
	return (
		<div className="listing-list">
			{props.entries.map((listing) => {
				const url = `/listing/${listing.id}`;
				return (
					<Link className="listing-link" key={listing.id} to={url}>
						<div className="listing-card">
							{listing.heroUrl ? (
								<img
									className="listing-card-img"
									src={listing.heroUrl}
									alt={`Listing Hero ${listing.id}`}
								/>
							) : (
								<></>
							)}
							<div className="listing-card-box">
								<h3 className="listing-card-name">{listing.name}</h3>
								<div className="listing-card-info">
									<p className="listing-card-price listing-card-p">
										<span className="listing-svg-box">$</span>
										{listing.price}
									</p>
									<p className="listing-card-guests listing-card-p">
										<span className="listing-svg-box">
											<img
												className="listing-svg"
												src={avatarSVG}
												alt="guest icon"
											/>
										</span>
										{listing.guests}
									</p>
									<p className="listing-card-beds listing-card-p">
										<span className="listing-svg-box">
											<img
												className="listing-svg"
												src={bedSvg}
												alt="bed icon"
											/>
										</span>
										{listing.beds}
									</p>
									<p className="listing-card-baths listing-card-p">
										<span className="listing-svg-box">
											<img
												className="listing-svg"
												src={bathSvg}
												alt="bath icon"
											/>
										</span>
										{listing.baths}
									</p>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
