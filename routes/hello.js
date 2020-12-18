const express = require("express");
const router = express.Router();

router.get('/hello', (req,res) => {
    res.write('hello world');
    res.end();
});

module.exports = router;