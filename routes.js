const router = require("express").Router();

router.get('/', (req, res)=>{
    res.send('Ping');
});

module.exports = router;