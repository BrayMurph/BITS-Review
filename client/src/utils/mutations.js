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
        $firstname: String!
        $lastname: String!
        $username: String!
        $password: String!
    ) {
        addUser(
            firstname: $firstname
            lastname: $lastname
            username: $username
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

