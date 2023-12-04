const Score = require("../models/scoreModel");

module.exports = {
  getAll: async (req, res) => {
    try {
      const allScores = await Score.find();
      res.json(allScores);
    } catch (err) {
      res.send(err);
    }
  },
  getOneById: async (req, res) => {
    try {
      //const oneScore = await Score.findOne({ _id: req.params.id });
      const oneScore = await Score.find({ _id: req.params.id });
      res.json(oneScore);
    } catch (err) {
      res.send(err);
    }
  },
  getUserScores: async (req, res) => {
    try {
      const Scores = await Score.findAll({ ownerId: req.params.id });
      res.json(Scores);
    } catch (err) {
      res.send(err);
    }
  },
  updateOne: async (req, res) => {
    try {
      const updateScore = await Score.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(updateScore);
    } catch (err) {
      res.send(err);
    }
  },
  postOne: async (req, res) => {
    try {
      const newScore = new Score({
        ownerId: req.body.ownerId,
        score: req.body.score
      });
      const successSave = await newScore.save();
      res.json(successSave);
    } catch (err) {
      res.send(err);
    }
  },
  deleteOne: async (req, res) => {
    try {
      res.json(await Score.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    }
  },
};
