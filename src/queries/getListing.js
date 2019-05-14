import gql from "graphql-tag";

export const GET_LISTING = gql`
	query Listing($id: ID!) {
		listing(id: $id) {
			name
			category
			hero
			description
			price
			guests
			beds
			baths
			amenities
		}
	}
`;
