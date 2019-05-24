import gql from 'graphql-tag';

export const MY_LISTINGS = gql`
  query MyListings(
		$first: Int
		$skip: Int
		$after: ID
		$orderBy: ListingOrderByInput
  ) {
    mylistings(
      first: $first,
      skip: $skip,
      after: $after,
      orderBy: $orderBy
    ) {
      id
      name
      category
      heroUrl
      price
      guests
      beds
      baths
    }
  }
`