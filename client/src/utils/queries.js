import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    {
        user {
            username
            comment {
                _id
                score
                message
            }
        }
    }
`;

export const QUERY_POST = gql`
    
`;

export const QUERY_COMMENT = gql`

`;

export const QUERY_ALL_POSTS = gql`

`;

export const QUERY_ALL_COMMENTS = gql`

`;