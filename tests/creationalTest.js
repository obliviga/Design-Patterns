test( "Abstract test", function Toyota(model) {
	ok( this.model = model, "Toyota created!" );
	ok( this.model = model, "Lexus created!" );
});

test( "Builder test", function drugLab(model) {
	ok( this.model = model, "Lexus created!" );
});

test( "Prototype test", function Laptop(type, operatingSystem, processor) {
	ok( this.type = type, "Type prototype created!");
	ok( this.operatingSystem = operatingSystem, "Operating System prototype created!");
	ok( this.processor = processor, "Processor prototype created!");
});

test( "Namespace test", function car(model, lol) {
	ok( this.model = model, "Lexus created!" );
	ok( this.lol = lol, "Lexus created!" );
});

