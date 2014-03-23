var module = (function () {

  var _private = {
      price: 9000,
      orderParts: function () {
          console.log("Cost:" + this.price);
      },
      shipParts: function (cost) {
          this.price = cost;
      },
      deliverParts: function () {
          console.log("Parts Delivered.");
      },
      moreComplexThingsThatTheClientNeedNotKnowAbout: function () {
          console.log("Huge facade.");
      }
  };

  return {

      facade: function (args) {
          _private.shipParts(args.cost);
          _private.orderParts();
          if (args.deliverParts) {
              _private.deliverParts();
          }
      }
  };
}());


//Facade
module.facade({
  deliverParts: true,
  cost: 9000
});