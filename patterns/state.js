var vehicle = function () {

    var count = 0;
    var currentState = new ordered(this);

    this.change = function (state) {
        // limits number of changes
        if (count++ >= 10) return;

        currentState = state;
        currentState.go();
    };

    this.start = function () {
        currentState.go();
    };
}

var ordered = function (car) {
    this.car = car;

    this.go = function () {
        log.add("A new car has been ordered,");
        car.change(new delivered(car));
    }
};

var shipped = function (car) {
    this.car = car;

    this.go = function () {
        log.add("A new car has been delivered,");
        car.change(new ordered(car));
    }
};

var delivered = function (car) {
    this.car = car;

    this.go = function () {
        log.add("A new car has been shipped.");
        car.change(new shipped(car));
    }
};

var log = (function () {
    var log = "";
    return {
        add: function (msg) {
            log += msg + "\n";
        },
        show: function () {
            document.getElementById("state").innerHTML = log;
            log = "";
        }
    }
})();

function getState() {

    var car = new vehicle();
    car.start();

    log.show();
}   