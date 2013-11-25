// application specific logic goes here

var COLORS = {
	init: function() {
		$('#add').click( function() {
			var colorsString = $('#colors_string').val();
			console.log(colorsString);

			if (colorsString.indexOf(',') !== -1) {
				var colorsSeparated = colorsString.split(',');
				window.colorsSeparated = colorsSeparated;
				console.log(colorsSeparated);
				for(var i=0;i < colorsSeparated.length; i++) {
					var separatedColor = colorsSeparated[i].trim();
					COLORS.updateColors(separatedColor);
				}
			} 

			else {
				COLORS.updateColors(colorsString);
			}

		});
	},
	updateColors: function(colorsString) {
		$('#colors').append(COLORS.createColorDiv(colorsString));
	},
	createColorDiv: function(colorString) {
		return "<div class='color' style='background-color:"+colorString+"'></div>";
	}
}


$(document).ready( function () {
	// program flow goes here
	COLORS.init();
}) //write the function and intitalise when doc ready

//indexof is used for strings - look for a character in a strings
// colorsSeparated contains an array of separated colorsSeparated
//window. used for creating a global variable
// .trim - gets rid of white spaces
// updateColors
// if there is a comma then it's '-1'


