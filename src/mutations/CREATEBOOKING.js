import gql from 'graphql-tag';

export const CREATEBOOKING = gql`
  mutation CreateBooking($listing: ID!, $data: CreateBookingInput!) {
    createBooking(listing: $listing, data: $data) {
      id 
      author {
        id
      }
      listing {
        id
      }
      startDate
      endDate
    }
  }
`