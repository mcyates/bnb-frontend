import gql from 'graphql-tag';

export const authQuery = gql`
  query {
    isAuthed
  }
`