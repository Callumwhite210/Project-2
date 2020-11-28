const Sequelize = require("sequelize");

//what is this for?
const { connect } = require("../controllers/post_controllers");



let sequelize = new Sequelize("posts_db", "root", "1234", {
   host: "localhost",
   port: 3306,
   dialect: "mysql",
   pool: {
     max: 5,
     min: 0,
     idle: 10000
   }
 });

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;

