const { gql } = require('apollo-server');

const typeDefs = gql`
  # Define your types here

  type User {
    _id: ID
    comment: [Comment]
    username: String
    email: String
    password: String
  }

  type Post {
    _id: ID
    avg_score: INT
    messages: String
    game_name: String
    comment: [Comment]
  }

  type Comment {
    _id: ID
    score: INT
    message: String
  }

  type Auth {
    token: ID
    user: User
  }

  # Define your queries here

  type Query {
    user: User
    
  }

  # Define your mutations here

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
