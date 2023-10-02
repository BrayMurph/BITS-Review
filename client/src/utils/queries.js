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
    query getPosts($_id: ID!) {
        posts(_id: $_id) {
            _id
            avg_score
            messages
            image
            game_name
            comments {
                _id
                score
                message
            }
        }
    }
`;

export const QUERY_COMMENT = gql`
    query getComments($_id: ID!) {
        comments(_id: $_id) {
            _id
            score
            message
        }
    }
`;

export const QUERY_ALL_POSTS = gql`
    {
        posts {
            _id
            avg_score
            messages
            image
            game_name
            comments {
                _id
                score
                message
            }
        }
    }
`;

export const QUERY_ALL_COMMENTS = gql`
    {
        comments {
            _id
            score
            message
        }
    }
`;