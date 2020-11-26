const db = require("../models/posts");
const express = require("express");
const Filter = require("bad-words");
const filter = new Filter();
const router = express.Router();

// display all posts on the hompeage form the db
router.get("/", function(req, res) {
  db.findAll({raw:true}).then(function(results) {
    //console.log(results);
    res.render("index", {posts:results});
    });
});

// below function not required anymore
/*
router.get("/category/:postCategory", function(req, res){

  let categoryToGet = req.params.postCategory;

  db.findAll({where:{category: categoryToGet}, raw:true}).then(function(results){
    res.render("index", {posts:results});
  });
});
*/
// display form to enter new posts
router.get("/newposts", function(req, res){
  res.render("addpost");
});

// enter new posts and store in db
router.post("/createpost", async function(req, res) {
  // clean body of new posts using bad-words package
  let postText = filter.clean(req.body.posted);
  // write new post to db
  db.create({username:req.body.username, title:req.body.title, posted: postText, category: req.body.category});
  // sync db
  db.sync();
});

//Likes 
router.post("/updatelike", function(req, res){
  db.create({likes:req.body.likes});
  db.sync();
});

module.exports = router