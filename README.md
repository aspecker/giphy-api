# Gif generator using giphy api
## Adam Specker

## TO-DOs
* when images populate, page grows causing background image to distort in size
* alter search algorithm so that a new selection of gifs is returned each time, using random not search
* major formatting is needed so that the gif loadout is standardized
* improve usage of giphy api to generate more relevant gifs (no unrelated gifs)
* buttons added from form do not properly make api call


## DONES

### Pseudocode
* Build array of strings which will be gif keywords
* Populate html with buttons corresponding to the tags in the initial array
* on button click
    * deploy an ajax call using a query url based on the button tag
    * generate 10 gifs from giphy api
    * display the gif rating under each gif
    * gif should load using the still url
* on gif click 
    * using data attribute, change the gif url to the moving version and change status to animate
    * if gif is animated, click should return to still version and change status to still
* have a form where user can input a search term
    * when form is submitted add another button with that search term
    * button will have same functionality as other buttons

#### Requirements

* Be sure to read about these GIPHY parameters (hint, hint):
* q
* limit
* rating
* Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by creating an app.
* Make sure you switch the protocol in the query URL from http to https, or the app may not work properly when deployed to Github Pages.
* Watch the demo video
* 
* You should have a high-level understanding of how this assignment works before attempting to code it.
* Instructions
* Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
* 
* We chose animals for our theme, but you can make a list to your own liking.
* Your app should take the topics in this array and create buttons in your HTML.
* 
* Try using a loop that appends a button for each string in the array.
* When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
* 
* When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
* 
* Under every gif, display its rating (PG, G, so on).
* 
* This data is provided by the GIPHY API.
* Only once you get images displaying with button presses should you move on to the next step.
* Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
