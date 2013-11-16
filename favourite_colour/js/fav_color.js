$(function() {



  	//Start to type below here. Make sure not to delete any "{}" braces. 
var userColor;
userColor=prompt("enter your favourite colour");

console.log(userColor+' - this will be the page background colour if it is yellow, green, red or blue. Otherwise it will go white. ');

if( (userColor=='red') || (userColor=='blue') || (userColor=='yellow') || (userColor=='green')) 
{
	
  $('body').css('background', userColor);
}


else{
	
  $('h2').text("Sorry! We don't have that colour");
  $('body').css('background', 'white');

}





}
);
