const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Ping");
  console.log("Ping");
});

module.exports = router;
