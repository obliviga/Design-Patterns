// A person constructor
function person(personRace) {

	this.personRace = personRace || "human";
	this.speed = 1;
	this.language = "English";

}

// Create an instance of a regular person
var Birth = new person("human");
console.log(Birth);

// Give birth to a super human, or decorated human
var superHuman = new person("Super Human");

// Super human's powers
superHuman.setSpeed = function(speedValue) {
	this.speed = speedValue;
};

superHuman.setPower = function(power) {
	this.power = power;
};

superHuman.setSpeed(10);
superHuman.setPower(9000);

console.log(superHuman);

// Create another instance of a normal human.
var anotherBirth = new person("human");
console.log(anotherBirth);