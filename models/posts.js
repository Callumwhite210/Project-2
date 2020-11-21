let orm = require("../config/sequelize.js")
let Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

let Posts = sequelize.define("posts", {
    routeName: Sequelize.STRING,
    username: Sequelize.STRING,
    posted: Sequelize.STRING,
    catagory: Sequelize.STRING,
    title: Sequelize.STRING
});

Posts.sync();

module.exports = Posts;