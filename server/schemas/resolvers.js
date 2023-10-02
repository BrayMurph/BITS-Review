const { User, Post, Comment } = require('../models');
const {signToken} = require ('../utils/auth')
const resolvers = {
  Query: {
    user: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    posts: async () => {
      try {
        const post = await Post.findAll();
        return post;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    post: async (_, { id }) => {
      try {
        const post = await Post.findByPk(id);
        return post;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        console.log(token, user)
        return { token, user };
      } catch (error) {
        console.log(error)
        throw new Error(error.message);
      }
    },
    addComment: async (parent, args) => {
      try {
        const comment = await Comment.create(args);
        return comment ;
      } catch (error) {
        console.log(error)
        throw new Error(error.message);
      }
    },
  }
};

module.exports = resolvers;