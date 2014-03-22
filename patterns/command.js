(function () {

var CarManager = {

/* request information */
requestInfo:function (model, id) {
return 'The purchase info for ' + model + ' with ID ' + id + ' is being processed...';
},

/* purchase the car */
buyVehicle:function (model, id) {
return 'You have successfully purchased Item ' + id + ', a ' + model + '.';
}

};

CarManager.execute = function (command) {
return CarManager[command.request](command.model, command.carID);
};

var actionA = CarManager.execute({request:'requestInfo', model:'Ford Mondeo', carID:'543434'});
console.log(actionA);

var actionB = CarManager.execute({request:'buyVehicle', model:'Ford Mondeo', carID:'543434'});
console.log(actionB);

})();