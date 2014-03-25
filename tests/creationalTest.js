test( "Abstract test", function Toyota(model) {
	ok( this.model = model, "Toyota created!" );
	ok( this.model = model, "Lexus created!" );
});

test( "Builder test", function drugLab(model) {
	ok( this.model = model, "Lexus created!" );
});

test( "Prototype test", function() {
	function Laptop( type, operatingSystem, processor ) {
		this.type = type;
		this.operatingSystem = operatingSystem;
		this.processor = processor;
	}
	Laptop.prototype.attributes = 'prototype';
	var laptop = new Laptop( "MacBook Pro", "OS X Mavericks", "Intel i7" );
	var attributes = {
		type : "MacBook Pro",
		operatingSystem : "OS X Mavericks",
		processor : "Intel i7"
	};
	propEqual( laptop, attributes, "Laptop has the same  properties without comparing its object constructors." );
});

QUnit.test( "Namespace test", function( assert ) {

	function car( model, miles ) {
		return model + " has done " + miles + " miles";
	}

	var namespace = car( "BMW", 12000 );
	assert.equal( namespace, "BMW has done 12000 miles", "BMW has done 12000 miles");

});