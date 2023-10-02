const mongoose = require('mongoose');

const { Schema }  = mongoose;

// Define the Comment schema
const commentSchema = new Schema({
  score: { type: Number },
  message: { type: String },
});

// Create the Comment model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
