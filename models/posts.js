// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Post" model that matches up with DB
let Post = sequelize.define("post", {
  // the id gets saved as a string
  id: Sequelize.INTEGER,
  // the username for the post (a string)
  username: Sequelize.STRING,
  // the post (a string)
  posted: Sequelize.STRING,
  // the likes (an integer)
  likes: Sequelize.INTEGER,
  //the dislikes (an integer)
  dislikes: Sequelize.INTEGER,
  // and the posts comments (an int)
  commented: Sequelize.STRING,
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Post.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Post;
