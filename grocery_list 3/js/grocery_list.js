	var list = [];
	var food_item;
	var found = false;
	var response = prompt('(a)dd item or (q)uit?');
	while(response === 'a'){
		food_item = prompt('What do you need to add');
		for (var i = 0; i<list.length; i++){
			if(list[i] === food_item ){
				found = true;
				alert('This item is already on the list');
				break;
			}
		}
		if (!found){
			// console.log(food_item);
			list.push(food_item);
		}
		found = false;
		response = prompt('(a)dd item or (q)uit?');
	}
	console.log('My Shopping List');
	for (var i=0; i < list.length; i++){
		console.log(list[i]);

		// this is the bit we added to write the list to the browser:
		$('ul').append('<li>'+list[i]+'</li>');
	}
	
	