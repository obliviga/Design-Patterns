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
	Laptop.prototype.doA = function () {};
	Laptop.prototype.doB = function () {};
	Laptop.prototype.bar = 'prototype';
	var laptop = new Laptop( "MacBook Pro", "OS X Mavericks", "Intel i7" );
	var attributes = {
		type : "MacBook Pro",
		operatingSystem : "OS X Mavericks",
		processor : "Intel i7"
	};
	propEqual( laptop, attributes, "The same properties without comparing objects constructors." );
});

test( "Namespace test", function car(model, lol) {
	ok( this.model = model, "Lexus created!" );
	ok( this.lol = lol, "Lexus created!" );
});

