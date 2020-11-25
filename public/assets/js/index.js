
$(document).ready(function(){
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

});
