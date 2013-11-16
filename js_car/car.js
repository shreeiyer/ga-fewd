var car = { //car is object
	color: "red",
	mileage: 1000,
	make: "Ford",
	model: "Focus",
	running: false,
	drive: function(distance) { //drive is function
		if (this.running) { //this the object i'm dealing with right now
				this.mileage = this.mileage + distance;
				this.stop();
				console.log(this.mileage)
			} else {
				console.log("you cannot drive a car that isn't started");
			}
	},
	start: function() {
		if (!this.running) {
			this.running = true;
			} else {
			console.log('the car is already running');
			}
	},
	stop: function() {
		if (this.running) {
			this.running = false;
			} else {
			console.log('the car is already stopped');
			}
	}

}