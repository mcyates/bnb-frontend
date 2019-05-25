import React from 'react';

export const Review = (props) => {
  const {review} = props;
  return (
    <React.Fragment>
    <h5>{review.author.name}</h5>
    {review.rating}
    <p>{review.text}</p>
    </React.Fragment>
  )
}