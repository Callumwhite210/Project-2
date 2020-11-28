const db = require("../models/posts");
const express = require("express");
const Filter = require("bad-words");
const filter = new Filter();
const router = express.Router();

// display all posts on the hompeage form the db
router.get("/", function(req, res) {
  db.findAll({raw:true, order: [['id', 'DESC']]}).then(function(results) {
    //console.log(results);
    res.render("index", {posts:results});
    });
});

// display form to enter new posts
router.get("/newposts", function(req, res){
  res.render("addpost");
});

// enter new posts and store in db
router.post("/createpost", async function(req, res) {
  // clean body of new posts using bad-words package
  let postText = filter.clean(req.body.posted);
  let postTitle = filter.clean(req.body.title);
  // write new post to db
  db.create({username:req.body.username, title:postTitle, posted: postText, category: req.body.category});
});

//Likes updates
router.put("/updatelike", function(req, res){
  //get id for the row to be updated
  let idTobeUpdated = req.body.id;
  console.log(idTobeUpdated);
  //find row by id
  db.findOne({
    where: { 
      id: idTobeUpdated, 
    }
    // increment likes by 1
  }).then(like => {
    return like.increment('likes');
    // reload the updated row
  }).then(post => {
    return post.reload();
    // send updated row back to frontend
  }).then(post => {
    res.json(post);
  });
  
});

module.exports = router