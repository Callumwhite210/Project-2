const connection = require("../config/connection.js");

let orm = {
    all: function(cb) {
        var queryString = "SELECT * FROM posts;";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          console.log(result);
          cb(result);
        });
      }
}

module.exports = orm;