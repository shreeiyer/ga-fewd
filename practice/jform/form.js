function Calculate()
{
  var age = document.getElementById('age').value;
  var height = document.getElementById('height').value; 
  var weight = document.getElementById('weight').value;
  
  document.getElementById('answer').value= 10 * parseFloat(weight) + 6.25*parseFloat(height) - 5 * parseFloat(age) + 5;
  
  document.form1.submit();
}