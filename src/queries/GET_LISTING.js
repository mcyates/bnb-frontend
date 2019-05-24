import gql from "graphql-tag";

export const GET_LISTING = gql`
	query Listing($id: ID!) {
		listing(id: $id) {
			name
			category
			heroUrl
			description
			price
			guests
			beds
			baths
			amenities
			author {
				id
			}
			bookings {
				startDate
				endDate
			}
		}
	}
`;
