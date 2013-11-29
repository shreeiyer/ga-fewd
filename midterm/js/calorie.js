
//---Robot body and speech bubble timer-----//


setTimeout(fade_out, 7500); // box will fade in 1 secs
setTimeout(show, 7500); // box 2 will appear after 1 sec delay



var totCalorie =0 ;

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

  console.log(age,height,weight);


 var selectedGender = $("input[name='gender']:checked").val()

  console.log(selectedGender);
  
if(selectedGender == 'male'){
 document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) + 5;}

 else{
    document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) - 161;}
 }
  
   function totalCal(){
        $("#total").text("You eat a total of "+totCalorie + " calories per day!");
        console.log(totCalorie);
    }


function ageValidate(){
  var validAge = document.getElementById('age').value;
      if(isNaN(validAge) || validAge <= 0 || validAge > 100){
        $("#invalidAge").text("Please enter a numeric value!");
        setTimeout(function(){$("#invalidAge").fadeOut("slow").detach},3000);
        return false;
        alert("this is false");
      }
     
    }

function heightValidate(){
  var validHeight = document.getElementById('height').value;
      if(isNaN(validHeight) || validHeight <= 30 || validHeight > 1000){
        $("#invalidHeight").text("Please enter height in cms. Eg. 180");
        setTimeout(function(){$("#invalidHeight").fadeOut("slow").detach},3000);
        return false;
        alert("this is false");
      }
     
    }
//----calories in breakfast-----//
  
    $("input[type=checkbox]").click(function() {

      //--- breakfast calories---//
     var brkfast=0;
    $("input[name='bfast']:checked").each(function() {
       brkfast += parseFloat($(this).val());  
        console.log(brkfast); 
       $("#bfasttext").text(brkfast+" calories for breakfast");
       
    });

    //--lunch--//
    var lun=0;
    $("input[name='lunch']:checked").each(function() {
       lun += parseFloat($(this).val());  
        console.log(lun); 
       $("#lunchtext").text(lun+" calories for lunch");
    });

  //---dinner---//
    var din=0;
    $("input[name='dinner']:checked").each(function() {
       din += parseFloat($(this).val());  
        console.log(din); 
       $("#dinnertext").text(din+" calories for dinner");
    });

    
    totCalorie = brkfast+lun+din;
    console.log(totCalorie+"total");

   

   });

  



//------calories in lunch------//


//------total calories-------//


