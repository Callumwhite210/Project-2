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
  // the title of the post (a string)
  title: Sequelize.STRING,
  // the post (a string)
  posted: Sequelize.STRING,
  // category a string
  category: Sequelize.STRING,
  // the likes (an integer)
  likes:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  }, 
  //the dislikes (an integer)
  dislikes:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  // and the posts comments (an int)
},{
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});
//test posts

Post.create({username:"random_user", title:"random_title", posted: "This is a random test post", category: "Personal", likes: 2});

Post.create({username:"random user", title:"random_title", posted: "This is a random test post", category:"Political" , dislikes: 2});

Post.create({username:"random user", title:"random_title", posted: "This is a random test post", category:"Product Review"});

// Syncs with DB
Post.sync();

// Makes the Character Model available for other files
module.exports = Post;
