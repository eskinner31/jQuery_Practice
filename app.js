var $red = $('.red'); //Selecting by Class
$red.append("<img src='http://placehold.it/350x150' alt= 'placeholdingimage'/>"); //Adding a child to selected element.
$red.contents();

var $blue = $('.blue');//Selecting the next element
//manipulating the CSS
$blue.css('background-color', 'blue');
$blue.css('height','300px');
$blue.css('width','300px');
