const router = require("express").Router();
const {
  newUser,
  getOne,
  getOneByEmail,
  updateOne,
  deleteOne,
} = require("../controllers/userController");

router.post("/", newUser);
router.post("/login", getOneByEmail);
router.get("/:id", getOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
