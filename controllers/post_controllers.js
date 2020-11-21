const express = require("express");

const router = express.Router();

//Will take posts from posts.js
let posts = require("../models/posts.js");

router.get("/", function(req, res) {
    posts.all(function(data){
        let dbObject = {
            posts: data
        };
    console.log(dbObject);
    res.render("index",dbObject);
    });
});



module.exports = router;