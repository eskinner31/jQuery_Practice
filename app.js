var $red = $('.red'); //Selecting by Class
$red.append("<img src='http://placehold.it/350x150' alt= 'placeholdingimage'/>"); //Adding a child to selected element.
$red.contents();

var $blue = $('.blue');//Selecting the next element
//manipulating the CSS
$blue.css('background-color', 'blue');
$blue.css('height','300px');
$blue.css('width','300px');
//Toggling CSS with Event Listener 'Hover'
$blue.hover(function(){
  $blue.css('background-color', 'yellow');
},function(){
  $blue.css('background-color', 'blue');
});

//testing dom creation, (must specify styles unless a style sheet is linked)
//When creating a new element with a class that was selected earlier, jQuery does not update.
var $myDiv = $('<div class="blue" style="width:300px; height:300px; background-color:orange">');

var $body = $('body');
$body.append($myDiv);

//Test to see if I can recover the other elements with the className of Blue by resetting the variable; SURVEY SAYS I CAN!
var $blue = $('.blue');
