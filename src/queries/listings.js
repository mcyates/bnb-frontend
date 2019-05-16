import gql from 'graphql-tag';

export const GET_LISTINGS = gql `
  query GetListings {
    listings
  }
`