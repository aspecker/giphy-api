// Javascript for GIPHY Api gif generator
// Adam Specker

// Array for populating initial buttons
var toons = ["The Simpsons","Gravity Falls","Rick and Morty","Harmon Quest","Adventure Time","Futurama","Bob's Burgers","The Oblongs","Aqua Team Hunger Force", "Harvey Birdman",
            "Sealab 2021","Frisky Dingo","Archer","Home Movies","King of the Hill","Beavis and Butthead","Clone High","Daria","Rocko's Modern Life", "GI Joe","Spongebob",
            "Ren and Stimpy","Dexter's Laboratory","Samurai Jack","Clone Wars","Superjail","The Venture Bros.", "Foster's Home for Imaginary Friends",
            "Bojack Horseman", "Gumby","Looney Tunes","Tex Avery","Scooby-Doo","He-Man","Pinky and the Brain","Animaniacs","The Powerpuff Girls","Tom and Jerry","Steamboat Willie","Popeye",
            "Freakazoid","Teen Titans",
        ];
var apiKey = "8M2UHf1IMhGeVjJh9FucWYCaTAmV2gKs";

// Call function on page load to populate inital buttons for each item in array
for (var i=0;i<toons.length;i++){
        // create a button ,add classes, data-name, text, and append
        var button = $("<button>").addClass("toonBtn btn");
        button.attr("data-name",toons[i]);
        button.text(toons[i]);
        $("#btnDiv").append(button);
}

//button on click event
$(".toonBtn").click(function(){
    $("#gifBox").empty();
    // Ajax call using data-name attribute as search term
    var show = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key="+apiKey+"&limit=10"+"&q="+show;
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);          
        // Create gif image html and gather rating, still url and moving url from API object
        for (var i=0;i<response.data.length;i++){
            // create gif html element
            var gif = $("<img>").addClass("gif img-responsive");
            //attach data-* for links and rating
            var stillURL = response.data[i].images.original_still.url;
            var moveURL = response.data[i].images.original.url
            var rating =$("<p>").text("GIF rated: "+response.data[i].rating.toUpperCase());
            // gif.attr("data-still",response.data[i].images.original_still.url);
            // gif.attr("data-animate",response.data[i].images.original.url);
            // gif.attr("data-rating",response.data[i].rating);
            // gif.attr("data-state","still");

            //attach still link to img tag and append
            gif.attr("src",stillURL);
            // var lineBreak = $("<div class='lineBreak'");
            $("#gifBox").append(rating,gif);
        }
      });
});