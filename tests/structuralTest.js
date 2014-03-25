test( "Decorator test", function() {
	function person( personRace, speed, language ) {
		this.personRace = "Human";
		this.speed = 1;
		this.language = "English";
	}
	person.prototype.superHuman = 'decorator';
	var Person = new person( "Human", 1, "English" );
	var superHuman = {
		personRace : "Human",
		speed : 10,
		language : "English"
	};
	notPropEqual( Person, superHuman, "The Super Human decorator has augmented properties from its undecorated constructor." );
});

module( "Facade 1 test" );

test( "If price is less than $10000", function() {
	price = 9000;
	ok( price < 10000, "The price is reasonable" );
});

test( "If cost is less than or equal to price", function() {
	cost = 9000;
	ok( cost <= price, "The cost is affordable" );
});

module( "Facade 2 test" );

test( "Check if the price and cost are the same", function() {
	price = 9000;
	cost = 9000;
	ok( price == cost, "Price and Cost are the same." );
});

test( "Check if the parts are delivered.", function() {

	ok( true, "The parts are delivered." );
});
////////////////////////////////////////////

