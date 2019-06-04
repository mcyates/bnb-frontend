export const hasReviewed = (listing, id) => {
	let reviewed = false;
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
	return reviewed;
};

export const hasStayed = (listing, id) => {
	let stayed = false;
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
	return stayed;
};

export const reviewUtils = {
	hasReviewed,
	hasStayed
};

export default reviewUtils;
