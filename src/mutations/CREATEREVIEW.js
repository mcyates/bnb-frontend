import gql from 'graphql-tag';

export const CREATEREVIEW = gql`
  mutation CreateReview($data: CreateReviewInput) {
    createReview(data: $data) {
      id
      author {
        id
        name
      }
      rating
      text
      createdAt
    }
  }
`