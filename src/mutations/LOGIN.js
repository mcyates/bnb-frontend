import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation LoginUser($data: LoginUserInput!) {
    loginUser(data: $data) {
      token
      user {
        id
        name
      }
    }
  }
`