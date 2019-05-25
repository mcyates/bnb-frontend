import React from "react";
import { Review } from "../Review/Review";

export const ReviewList = (props) => {
  const {reviews} = props;
	return (
		<React.Fragment>
      <div>
      <h4>Reviews</h4>
      {reviews.map((review) => {
        return <Review key={review.id} review={review} />
      })}
      </div>
		</React.Fragment>
	);
};
