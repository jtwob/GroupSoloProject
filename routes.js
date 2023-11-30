const router = require("express").Router();

router.get("/ping", (req, res) => {
  let response =
    '<div><p>Ping</p><a href="http://localhost:3000">Back</a></div>';
  res.send(response);
  console.log("Ping");
});

router.post("/api/users", (req, res)=>{
  
})

module.exports = router;
