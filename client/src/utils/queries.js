import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            friends {
                _id
                username
            }
            movielist {
                movieId
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friends {
                _id
                username
            }
            movielist {
                movieId
            }
        }
    }
`;

