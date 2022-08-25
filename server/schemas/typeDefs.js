const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friends: [User]
        movielist: [movie]
    }

    type Auth {
        token: ID!
        user: User
    }

    type movie {
        movieId: String!
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addFriend(friendId: ID!): User
        addMovie(movieId: String!): User
    }
`;

module.exports = typeDefs;