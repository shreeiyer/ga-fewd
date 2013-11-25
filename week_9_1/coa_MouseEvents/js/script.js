/**
 * Welcome to Mouse Events Exercise
 * A couple of thing we want to do:
 * 
 * 1) When a user clicks the mousebox, turn it red by adding the "clicked" css class 
 *    to it. When the user clicks it again, remove the "clicked" class and turn it blue 
 *    again.
 *
 * 2) Use the mouseMove event to show the current position of the mouse using the HTML snippet provided
 */

// $(document).ready(function(){
// 	$('#mouseBox').click(function(event){ //when mouse is clicked run funtion

// 		$(this).toggleClass('clicked');//this applies to mouseBox
// 		console.table(event); //shows all the contents
// 		console.log(event.pageX); // knowing the position of where the user has clicked
// 		$('#xLocation').text(event.pageX);

// 		console.log(event.pageY);
// 		$('#yLocation').text(event.pageY);

	// }); //click is an event object
// });

$(document).ready(function(){
	$('#mouseBox').on("mouseup mousedown",function(event){ //when mouse is clicked run funtion

		$(this).toggleClass('clicked');//this applies to mouseBox
		console.table(event); //shows all the contents
		console.log(event.pageX); // knowing the position of where the user has clicked
		$('#xLocation').text(event.pageX);

		console.log(event.pageY);
		$('#yLocation').text(event.pageY);

	}); //click is an event object
});
