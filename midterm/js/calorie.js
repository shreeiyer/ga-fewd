
//---Robot body and speech bubble timer-----//


setTimeout(fade_out, 7500); // box will fade in 1 secs
setTimeout(show, 7500); // box 2 will appear after 1 sec delay





function fade_out() {
 	$("#torso-round").fadeOut("slow").detach();
 }

setTimeout(function(){$("#speech1").fadeOut("slow").detach},3000);

setTimeout(function(){$("#speech2").show("slow")},3500);

setTimeout(function(){$("#speech2").fadeOut("slow").detach},7000);

setTimeout(function(){$("#speech3").show("slow")},7500);

setTimeout(function(){$("#speech3").fadeOut("slow").detach},12000);


function show() {
	 $('#torso').css({'display':'inherit'});
	 $('#torso').show();

}


//---calories/day---//

function CalorieCount()
{
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value; 
  var weight = document.getElementById('weight').value;

 var selectedGender = $("input[name='gender']:checked").val()

  console.log(selectedGender);
  
if(selectedGender == 'male'){
 document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) + 5;}

 else{
    document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) - 161;}
 }
  


//----calories in breakfast-----//

$("input[type=checkbox]").click(function() {
    var breaktotal = 0;
    $("input[type=checkbox]:checked").each(function() {
        breaktotal += parseFloat($(this).val());
    }
    );

console.log(breaktotal);

    $("h3").text(breaktotal+" breakfast calories");
});

