// create router
var router = require("express").Router();

// import path module
var path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/html/exercise.html"));
  });
  
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/html/stats.html"));
  });
  
  module.exports = router;