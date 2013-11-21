


setTimeout(fade_out, 1000); // box will fade in 1 secs
setTimeout(show, 1000); // box 2 will appear after 1 sec delay

$(document).ready(function(){

function fade_out() {
 	$("#torso-round").fadeOut().detach();
 }



function show() {
	 $('#torso').css({'display':'inherit'});
	 $('#torso').show();

}
});

function Calculate()
{
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value; 
  var weight = document.getElementById('weight').value;
  
 document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) + 5;
  
 document.form1.submit();
}