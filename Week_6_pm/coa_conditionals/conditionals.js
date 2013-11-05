	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 
	 var firstName = prompt("what's your first name?"); 

	 var lastName = prompt("what's your last name?");
	 


	//Create a new variable called full name and store the users full name.
	
	var fullName = firstName + lastName;

	//Print the full name to the console.
	console.log(fullName);

	//Prompt the user for their age.
	
	var userAge = prompt("what's your age?");

	var ageOlder = parseInt(userAge);


	//Add 10 to the age and print the output to the console.
	
	console.log(ageOlder+10);
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.

	if (userAge > 18){
		console.log("Wohoo you are an adult!");
	}
	else {
		console.log("you are a minor");
	}
	
	//Verify if the first name is "General" and the last name is NOT "Assembly"
if (firstName== "General" && lastName != "Assembly"){
	console.log("Yes, first name is General and last name is not assembly!");
}
else {
	console.log("no, it's not General");
}

