const Sequelize = require("sequelize");




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

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

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
