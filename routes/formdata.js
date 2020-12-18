const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const {name, city, country} = req.body;
  res.render("formresponse", {name, city, country});
});

module.exports = router;