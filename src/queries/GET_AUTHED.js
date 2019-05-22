import gql from 'graphql-tag';

export const GET_AUTHED = gql`
  query {
    isAuthed
  }
`