const { gql } = require('apollo-server');

const typeDefs = gql`
  # Define your types here

  type User {
    id: INT
    comment: [comment]
    username: String
    email: String
    password: String
  }

  type Post {
    id: INT
    avg_score: INT
    messages: String
    game_name: String
    comment_id: INT
    comment: [commentt]
  }

  type Comment {
    id: INT
    score: INT
    message: String
    reviewer_id: String
  }

  # Define your queries here

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
    post(id: ID!): Post
  }

  # Define your mutations here

  type Mutation {
    createUser(username: String!, email: String!): User!
    updateUser(id: ID!, username: String, email: String): User!
    deleteUser(id: ID!): Boolean
    createPost(title: String!, body: String!, authorId: ID!): Post!
    updatePost(id: ID!, title: String, body: String): Post!
    deletePost(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
