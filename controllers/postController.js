const Post = require("../models/postModel");

module.exports = {
  getAll: async (req, res) => {
    try {
      const allPosts = await Post.find();
      res.json(allPosts);
    } catch (err) {
      res.send(err);
    }
  },
  getOneById: async (req, res) => {
    try {
      //const onePost = await Post.findOne({ _id: req.params.id });
      const onePost = await Post.find({ _id: req.params.id });
      res.json(onePost);
    } catch (err) {
      res.send(err);
    }
  },
  getUserPosts: async (req, res) => {
    try {
      const Posts = await Post.findAll({ ownerId: req.params.id });
      res.json(Posts);
    } catch (err) {
      res.send(err);
    }
  },
  updateOne: async (req, res) => {
    try {
      const updatePost = await Post.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(updatePost);
    } catch (err) {
      res.send(err);
    }
  },
  postOne: async (req, res) => {
    try {
      const newPost = new Post({
        ownerId: req.body.ownerId,
        brand: req.body.brand,
        rating: req.body.rating,
        description: req.body.description
      });
      const successSave = await newPost.save();
      res.json(successSave);
    } catch (err) {
      res.send(err);
    }
  },
  deleteOne: async (req, res) => {
    try {
      res.json(await Post.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    }
  },
};
