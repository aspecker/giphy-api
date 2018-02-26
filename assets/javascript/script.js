// Javascript for GIPHY Api gif generator
// Adam Specker

// Array for populating initial buttons
var toons = ["The Simpsons","Gravity Falls","Rick and Morty","Adventure Time","Futurama","Bob's Burgers","The Oblongs","Aqua Team Hunger Force", "Harvey Birdman",
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

//Hide panels until button is clicked
$("#gifPanel").hide();

//button on click event
$(document).on("click",".toonBtn", function(event){
    event.preventDefault();
    $("#gifPanel").show();
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
            var gifDiv = $("<div class='col-md-6'>")
            var gif = $("<img>").addClass("gif img-responsive mx-auto");
            //attach data-* for links and rating
            var stillURL = response.data[i].images.fixed_width_still.url;
            var moveURL = response.data[i].images.fixed_width.url
            var rating =$("<p>").html("<b>GIF rated: "+response.data[i].rating.toUpperCase()+"</b>");
            $(gif).data("state","still");
            $(gif).data("still",stillURL);
            $(gif).data("move",moveURL);
            //attach still link to img tag and append
            gif.attr("src",stillURL);
            // var lineBreak = $("<div class='lineBreak'");
            gifDiv.append(rating,gif);
            $("#gifBox").append(gifDiv);
        }
      });
});

// image on click pause and resume functionality
$(document).on("click",".gif",function(){
    // retrieve information from data states
    var state = $(this).data("state");
    var stillURL = $(this).data("still");
    var moveURL = $(this).data("move");
    // conditional to change from moving to still
    if (state==="still"){
        $(this).data("state","animate");
        $(this).attr("src",moveURL);
    } else {
        $(this).data("state","still");
        $(this).attr("src",stillURL);
    }
    
});

//Form function
$(document).on("click","#submitBtn",function(event){
    event.preventDefault();
    var toonSearch = $("#search").val();
    var button = $("<button>").addClass("toonBtn btn");
    button.attr("data-name",toonSearch);
    button.text(toonSearch);
    $("#btnDiv").append(button); 
});
