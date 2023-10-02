const { User, Post, Comment } = require('../models');
const {signToken} = require ('../utils/auth')
const resolvers = {
  Query: {
    user: async (_, { _id }) => {
      try {
        const user = await User.findByPk(_id);
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
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
        const post = await Post.findByPk(_id);
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