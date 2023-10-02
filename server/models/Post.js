const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Post schema
const postSchema = new Schema({
  avg_score: { type: Number },
  image: {type: String},
  messages: { type: String },
  game_name: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], // Updated field name to match the schema
});

// Create the Post model based on the schema
const Post = mongoose.model('Post', postSchema);

// Export the Post model
module.exports = Post;
