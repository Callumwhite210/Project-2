// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Post" model that matches up with DB
let Post = sequelize.define("posts", {
  // the id gets saved as a string
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  // the username for the post (a string)
  username: Sequelize.STRING,
  // the post (a string)
  posted: Sequelize.STRING,
  // the likes (an integer)
  likes: Sequelize.INTEGER,
  //the dislikes (an integer)
  dislikes: Sequelize.INTEGER,
  // and the posts comments (an int)
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});
//test posts

//Post.create({username: "test name", posted: "test post"});

//Post.create({username:"test 2", posted: "test post 2"});

// Syncs with DB
Post.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Post;
