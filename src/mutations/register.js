import gql from "graphql-tag";

export const REGISTER = gql`
	mutation CreateUser($data: CreateUserInput!) {
		createUser(data: $data) {
			token
			user {
				id
				name
			}
		}
	}
`;
