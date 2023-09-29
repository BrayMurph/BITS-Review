const { User, Post, Comment } = require('../models');
const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    user: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    addUser: async (_, { username, email }) => {
      try {
        const user = await User.create({ username, email });
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    updateUser: async (_, { id, username, email }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error(`User with ID ${id} not found`);
        }
        if (username !== undefined) {
          user.username = username;
        }
        if (email !== undefined) {
          user.email = email;
        }
        await user.save();
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error(`User with ID ${id} not found`);
        }
        await user.destroy();
        return true;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    createPost: async (_, { title, body, authorId }) => {
      try {
        const post = await Post.create({ title, body, authorId });
        return post;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    updatePost: async (_, { id, title, body }) => {
      try {
        const post = await Post.findByPk(id);
        if (!post) {
          throw new Error(`Post with ID ${id} not found`);
        }
        if (title !== undefined) {
          post.title = title;
        }
        if (body !== undefined) {
          post.body = body;
        }
        await post.save();
        return post;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    deletePost: async (_, { id }) => {
      try {
        const post = await Post.findByPk(id);
        if (!post) {
          throw new Error(`Post with ID ${id} not found`);
        }
        await post.destroy();
        return true;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  User: {
    // Define any field resolvers for the User type here if needed
  },
  Post: {
    // Define any field resolvers for the Post type here if needed
  },
  Comment: {
    // Define any field resolvers for the Comment type here if needed
  },
};