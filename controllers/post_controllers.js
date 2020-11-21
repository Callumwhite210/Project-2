const express = require("express");

const router = express.Router();

let Posts = require("../models/posts.js");

module.exports = function(app){
app.get("/api/:posts?", function(req,res){
    if (req.params.posts) {
            Posts.findAll().then(function(result) {
            return res.json(result);
            });
          }
        });
    }
   


