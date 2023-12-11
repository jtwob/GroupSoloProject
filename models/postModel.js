const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  
  ownerId: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  description: {
    type: String,
    required: true
  }

});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;
