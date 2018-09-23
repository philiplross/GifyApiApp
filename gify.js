// var animals = ["cheetah", "deer", "horse", "squirl"];
// var newAnimals = 
// // console.log(animals);

// for (animals = 0; animals < 10; animals++) {
//     // $(#"newAnimals").append("<button>");
// animals.push("Fox");
// };


//$("#animalButtons").attr(animals);


//for( a = 0; a < 10; a++);
   
var animals = ["cheetah", "deer", "horse", "squirl"];
// var newAnimals  = animals++;

for (a = 0; a < 10; a++) {
    
};
console.log(animals);

// $(#"newAnimals").append("<button>");




$(document).ready(function(){
 $("#buttonOne").click(function() {
 $('#newAnimals').append('<button data-role="button" data-inline="true" data-mini="true" data-theme="b">animal button</button>');
 }); 
 });


    // Event listener for all button elements
    $("button").on("click", function() {
      // In this case, the "this" keyword refers to the button that was clicked
      var searchItem = $(this).attr("data-item");

      // Constructing a URL to search Giphy for the name of the person who said the quote
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        searchItem + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing our AJAX GET request
      $.ajax({
        url: queryURL,
        method: "GET"
      })
       
        .then(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;

          // Looping over every result item
          for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div for the gif
              var gifDiv = $("<div>");

              
              var rating = results[i].rating;

              
              var p = $("<p>").text("Rating: " + rating);

              
              var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              searchItem.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(searchItem);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);
            }
          }
        });
    });
