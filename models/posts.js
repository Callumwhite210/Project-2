

// Creates a "Post" model that matches up with DB
module.exports = function(sequelize, DataTypes){
  let Posts = sequelize.define("Posts", {
  // the id gets saved as a string
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  // the username for the post (a string)
  username: DataTypes.STRING,
  // the title of the post (a string)
  title: DataTypes.STRING,
  // the post (a string)
  posted: DataTypes.STRING,
  // category a string
  category: DataTypes.STRING,
  // the likes (an integer)
  likes:{
    type: DataTypes.INTEGER,
    defaultValue: 0
  }, 
  //the dislikes (an integer)
  dislikes:{
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  
},{
  // disable the modification of tablenames
  freezeTableName: true
});

return Posts;

};

