let orm = require("../config/sequelize.js")

let posts = {
    all: function(cb) {
        orm.all("posts", function(res){
            cb(res);
        });
    },


};

module.exports = posts;