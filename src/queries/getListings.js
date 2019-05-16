import gql from 'graphql-tag';

export const LISTINGS = gql`
  query Listings($query: String, $first: Int, $skip: Int, $after: ID, $orderBy: ListingOrderByInput) {
    listings(query: $query, first: $first, skip: $skip, after: $after, orderBy: $orderBy) {
      id
      name
      category
			heroUrl      
      price
      beds
      baths
    }
  }
`