const connection = require("mysql2/typings/mysql/lib/Connection");

$(document).ready(function(){

  // show hide category-posts based on dropdown selection
  $("#post-category").on("change", function(){
    
    let postCategory = $(this).val();
    
    switch (postCategory) {
      case "Political":
        $(".Personal, .Product Review").hide();
        $(".Political").show();
        break;
      case "Personal":
        $(".Political, .Product Review").hide();
        $(".Personal").show();
      break;
      case "Product Review":
        $(".Political, .Personal").hide();
        $(".Product Review").show();
      break;
      case "All Categories":
      $(".Political, .Product Review, .Personal").show();
        break;
    }
    
  });
  // display the new post form on button click
  $("#new-post-btn").on("click",function(){

      $.ajax("/newposts",{
          type: "GET",
      }).then(function(){
        location.href = "/newposts";
      })
  });
  // go back to the homepage on btn click
  $("#home-btn").on("click",function(){

    $.ajax("/newposts",{
        type: "GET",
    }).then(function(){
      location.href = "/";
    })
  });
  // submit form data in a POST query
  $("#submit-btn").on("click", function (event) {

    event.preventDefault();
    // get all values for the form and create an Object 
    let newPost = {

      username: $("#user").val().trim(),
      title: $("#title").val().trim(),
      posted: $("#post-body").val().trim(),
      category: $("#category").val()
    } 
    // POST call with the post data
    $.ajax("/createpost/", {
      type: "POST",
      data: newPost,
    }).then(
      function() {
      });
      // clear all fields when submit btn is clicked
    $("#user").val("");
    $("#title").val("");
    $("#post-body").val("");
});

$(".like-btn").on("click", function (){
  let newLike = {
    id: $(this).data("id")
  } 
   $.ajax("/updateLike",{
     type: "POST",
     data: newLike,
   }).then(
    function addLike(){
      let query = connection.query(
        "UPDATE posts SET likes = likes +1 WHERE id ="+ newLike.id +";",
        {

        }
      )
    }
   )

});

});

