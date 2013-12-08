/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

$('#addition input').change(function add(){
	var value1 = parseInt($("#addition input:eq(0)").val());
	console.log(value1);
	var value2 = parseInt($("#addition input:eq(1)").val());
	console.log(value2);

	//var total= parseInt($("#addition eq(2)").val());
	total = value1+ value2;

	if(isNaN(total)){

		total=0;
}
	console.log(total);

	$('#addition input:eq(2)').val(total);
});

$('#subtraction input').change(function subtract(){
	var value1 = parseInt($("#subtraction input:eq(0)").val());
	console.log(value1);
	var value2 = parseInt($("#subtraction input:eq(1)").val());
	console.log(value2);

	//var total= parseInt($("#addition eq(2)").val());
	total = value1 - value2;

	console.log(total);

	$('#subtraction input:eq(2)').val(total);
});


$('#multiplication input').change(function multiply(){
	var value1 = parseInt($("#multiplication input:eq(0)").val());
	console.log(value1);
	var value2 = parseInt($("#multiplication input:eq(1)").val());
	console.log(value2);

	//var total= parseInt($("#addition eq(2)").val());
	total = value1 * value2;

	console.log(total);

	$('#multiplication input:eq(2)').val(total);
});


$('#division input').change(function divide(){
	var value1 = parseInt($("#division input:eq(0)").val());
	console.log(value1);
	var value2 = parseInt($("#division input:eq(1)").val());
	console.log(value2);

	//var total= parseInt($("#addition eq(2)").val());

	total = value1 / value2;

	if(isNaN(total)){

		total=0;
}
	console.log(total);

	$('#division input:eq(2)').val(total);
});

$('#modulus input').change(function mod(){
	var value1 = parseInt($("#modulus input:eq(0)").val());
	console.log(value1);
	var value2 = parseInt($("#modulus input:eq(1)").val());
	console.log(value2);

	//var total= parseInt($("#addition eq(2)").val());
	total = value1 % value2;

	console.log(total);

	$('#modulus input:eq(2)').val(total);
});
