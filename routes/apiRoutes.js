const router = require("express").Router();
const {
  getAll,
  getOneById,
  getUserPosts,
  postOne,
  updateOne,
  deleteOne,
} = require("../controllers/postController");

router.get("/", getAll);
router.get("/:id", getUserPosts);
router.get("/id/:id", getOneById);
router.post("/", postOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
