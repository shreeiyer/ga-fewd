
//---Robot body and speech bubble timer-----//

<<<<<<< HEAD
setTimeout(fade_out, 7500); // box will fade in 1 secs
setTimeout(show, 7500); // box 2 will appear after 1 sec delay
=======
setTimeout(fade_out, 1000); // box will fade in 1 secs
setTimeout(show, 1000); // box 2 will appear after 1 sec delay

>>>>>>> a4e32d6ea1d89cd0c54adca988bc13e5da902825


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
<<<<<<< HEAD
=======

>>>>>>> a4e32d6ea1d89cd0c54adca988bc13e5da902825

//---calories/day---//

function CalorieCount()
{
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value; 
  var weight = document.getElementById('weight').value;

 var selectedGender = $("input[name='gender']:checked").val()

  console.log(selectedGender);
  
if(selectedGender == ' male'){
 document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) + 5;}

 else{
    document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) - 161;}
 }
  
<<<<<<< HEAD

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
=======
 document.form1.submit();
}
>>>>>>> a4e32d6ea1d89cd0c54adca988bc13e5da902825
