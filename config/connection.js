const Sequelize = require("sequelize");
const { connect } = require("../controllers/post_controllers");

let sequelize = new Sequelize("posts_db", "root", "localpass", {
   host: "localhost",
   port: 3306,
   dialect: "mysql",
   pool: {
     max: 5,
     min: 0,
     idle: 10000
   }
 });

module.exports = sequelize;

/* if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "localpass",
      database: "posts_db"
    })
    } */

//connect.connect();
//module.exports = connection;
