export const totalRating = (listing, maxRating) => {
	// totalRating is the current highest possible rating a listing could have. ex No. of reviews * highest possible rating

	let totalRating = 0;

	if (listing.reviews.length > 0) {
		totalRating = maxRating * listing.reviews.length;
	}

	return totalRating;
};

export const sumRating = (listing) => {
	// check to see if listing already has a rating
	// if not set rating to zero;
	if (!listing.rating) {
		listing.rating = 0;
	}

	// sumRating is the actual sum of all current ratings
	let sumRating = 0;

	if (listing.reviews.length > 0) {
		for (let i = 0; i < listing.reviews.length; i++) {
			sumRating = sumRating + listing.reviews[i].rating;
		}
	} else {
		return 0;
	}
	return sumRating;
};

export const getRating = (sumRating, totalRating, maxRating) => {
	if (sumRating === 0 || totalRating === 0) {
		return 0;
	}

	const ratingAvg = (sumRating * maxRating) / totalRating;

	return ratingAvg;
};

const ratingUtil = {
	getRating,
	sumRating,
	totalRating
};

export default ratingUtil;
