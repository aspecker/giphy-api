# Gif generator using giphy api
## Adam Specker

## FUTURE DIRECTION
* project could gain from more interactivity from the user
    * ideas are some kind of guessing game for which gif is currently trending
    * or guess what the tag is on the trending gif
* increasing pool of gifs or randomizing gifs could deepend user experience

## TO-DOs
* major formatting is needed so that the gif loadout is standardized

## DONES
* (making repeated ajax calls led to too long load times) alter search algorithm so that a new selection of gifs is returned each time, using random not search
* buttons added from form do not properly make api call
* when images populate, page grows causing background image to distort in size

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
