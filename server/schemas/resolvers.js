const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const {signToken} = require ('../utils/auth')
const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if(context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
        
      throw new AuthenticationError('Not logged in');
    },
    posts: async (_, { comments }) => {
      try {
        const params = {};

        if (comments) {
          params.comments = comments;
        }
        
        return await Post.find(params).populate('comments');
      } catch (error) {
        throw new Error(error.message);
      }
    },
    post: async (_, { _id }) => {
      try {
        const post = await Post.findById(_id);
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
    addComment: async (parent, { score, message }, context) => {
      console.log(context);
      if (context.user) {
        const comment = new Comment({ score, message });

        await User.findByIdAndUpdate(context.user._id, { $push: { comments: comment } });
        
        return comment;
      }

      if (context.post) {
        const comment = new Comment({ score, message });

        await Post.findByIdAndUpdate(context.post._id, { $push: { comments: comment } });

        return comment;
      }
      throw new AuthenticationError('Not logged in');
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user};
    }
  }
};

module.exports = resolvers;