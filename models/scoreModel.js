const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  
  ownerId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  }
});

var Score = mongoose.model("score", scoreSchema);

module.exports = Score;
