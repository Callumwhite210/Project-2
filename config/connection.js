const Sequelize = require("sequelize");
const { connect } = require("../controllers/post_controllers");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize("posts_db", "root", "localpass", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  })
};

connect.connect();

 /* let sequelize = new Sequelize("posts_db", "root", "localpass", {
   host: "localhost",
   port: 3306,
   dialect: "mysql",
   pool: {
     max: 5,
     min: 0,
     idle: 10000
   }
 }); */

module.exports = sequelize;
