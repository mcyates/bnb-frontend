import gql from "graphql-tag";

export const MY_BOOKINGS = gql`
	query MyBookings(
		$first: Int
		$skip: Int
		$after: ID
		$orderBy: BookingOrderByInput
	) {
		mybookings(first: $first, skip: $skip, after: $after, orderBy: $orderBy) {
			id
			author {
				id
			}
			listing {
				name
				id
			}
			startDate
			endDate
		}
	}
`;
