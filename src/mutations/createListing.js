import gql from "graphql-tag";

export const CREATELISTING = gql`
  mutation CreateListing($data: CreateListingInput!) {
    createListing(data: $data) {
      id
      name
      category
      hero
      description
      price
      guests
      beds
      baths
      amenities
      published
    }
  }
`;
