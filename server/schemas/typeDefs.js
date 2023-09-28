const { gql } = require('apollo-server-express');

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
    avg_score: Int
    messages: String
    game_name: String
    comment: [Comment]
  }

  type Comment {
    _id: ID
    score: Int
    message: String
  }

  type Auth {
    token: ID
    user: User
  }

  # Define your queries here

  type Query {
    user: User
    post(_id: ID!): Post
    comment(_id: ID!): Comment
    posts(): [Post]
    comments(): [Comment]
  }

  # Define your mutations here

  type Mutation {
    addComment(post: _id!, score: Int! , message: String!): Comment
    updateComment(comment: _id, score: Int, message: String): Comment
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
