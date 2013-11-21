/*
	Only add code to this file.
*/
//var choice = prompt('are you ready for the DOM to change?');
setTimeout(fade_out, 1000); // box will fade in 1 secs
setTimeout(show, 1000); // box 2 will appear after 1 sec delay
//if(choice == 'y'){

	function fade_out() {
 	$("#box").fadeOut().detach();
}
	//$('.box').css('display','none');
	function show() {
	 $('#box2').css({'display':'inherit'});
	 $('#box2').show();
	}
	//$('.box2').css({'background':'blue','display':'inherit'});
//}
//else{
//	prompt('I have nothing cool to show you!');
//}
