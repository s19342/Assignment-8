const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const {songName, album, releaseYear} = req.body;

    if(!songName || !album || !releaseYear){
        res.status(400).send('Please input songName, album and releaseYear as json');
    }

    res.render("jsonresponse", {songName, album, releaseYear});
});
  
module.exports = router;