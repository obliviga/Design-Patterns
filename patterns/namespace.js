var namespace = namespace || {};
 
// here a namespace2 object is passed as a function
// parameter, where we assign public methods and
// properties to it
(function( car ){

    car.model = "BMW X3";
    car.year = "2013";
    car.miles = "12000";

	car.toString = function () {
		return car.model + " has done " + car.miles + " miles";
	};

})( namespace );
 
console.log( namespace );