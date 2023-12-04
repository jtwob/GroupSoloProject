const router = require("express").Router();
const {
  getAll,
  getOneById,
  getUserScores,
  postOne,
  updateOne,
  deleteOne,
} = require("../controllers/scoreController");

router.get("/", getAll);
router.get("/:id", getUserScores);
router.get("/id/:id", getOneById);
router.post("/", postOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
