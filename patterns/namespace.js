var namespace = namespace || {};
 
// namespace object is passed as a function
// parameter. The public methods and
// properties are assigned to the namespace
(function( car ){

    car.model = "BMW X3";
    car.year = "2013";
    car.miles = "12000";

	car.toString = function () {
		return car.model + " has done " + car.miles + " miles";
	};

})( namespace );
 
console.log( namespace );