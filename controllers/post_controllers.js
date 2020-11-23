let Post = require("../models/posts");
let express = require("express");
let router = express.Router();

/* router.get("/", function(req, res) {
  res.render("index"); */
//})


  router.get("/", function(req, res) {
    Post.findAll({raw:true}).then(function(results) {
      console.log(results);
      res.render("index", {posts:results});
     
    });
  });

module.exports = router