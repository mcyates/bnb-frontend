import gql from "graphql-tag";

export const DELETELISTING = gql`
	mutation DeleteListing($id: ID!) {
		deleteListing(id: $id) {
			name
		}
	}
`;
