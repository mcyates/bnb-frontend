import gql from 'graphql-tag';

export const EDITLISTING = gql`
  mutation UpdateListing($id: ID!, $data: UpdateListingInput!) {
    updateListing(id: $id, data: $data) {
      id
      name
      category
      hero
      heroUrl
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