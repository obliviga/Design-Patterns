test( "State pattern test", function (model) {
	ok( this.model = model, "Toyota created!" );
});

QUnit.test( "Namespace test", function( assert ) {

	function car( model, miles ) {
		return model + " has done " + miles + " miles";
	}

	var namespace = car( "BMW", 12000 );
	assert.equal( namespace, "BMW has done 12000 miles", "BMW has done 12000 miles");

});
