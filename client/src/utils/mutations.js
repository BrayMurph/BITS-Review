import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment(
        $post: ID!
        $score: Int!
        $message: String!
    ) {
        addComment(
            post: $post
            score: $score
            message: $message
      ) {
            _id
      }
  }
`;
