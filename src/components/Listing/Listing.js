import React from 'react';
import { Query } from 'react-apollo';
import {GET_LISTING} from '../../queries/getListing';


export const Listing = (props) => {
  return (
    <Query query={GET_LISTING} variables={{id: props.id}}>
    {({loading, error, data}) => {
      if (loading) {
        return null;
      }
      if (error) {
        return `Error: ${error}`
      }
      const {listing} = data
      console.log(data);
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
        </>
      )
    }}
    </Query>
  )
}

export default Listing;