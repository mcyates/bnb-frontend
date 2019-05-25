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
			reviews {
				id
				rating
				text
				createdAt
				author {
					name
					id
				}
			}
			bookings {
				startDate
				endDate
				author {
					id
				}
			}
		}
	}
`;
