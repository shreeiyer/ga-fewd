$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces. 
var bgColor;
bgColor=prompt("enter your favourite colour");

console.log(bgColor+' - this will be the page background colour if it is yellow, green, red or blue. Otherwise it will go white.');

if(bgColor=='red' || bgColor=='blue' || bgColor=='yellow' || bgColor=='green'){
	
  $('body').css('background', bgColor);
}


else{
	
  $('h2').text("Sorry! We don't have that colour");
  $('body').css('background', 'white');

}

}
);
