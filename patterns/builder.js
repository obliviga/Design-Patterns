function drugLab() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        builder.step3();
        return builder.get();
    }
}

function CookMeth() {
    this.meth = null;
    this.step1 = function() {
        this.meth = new Meth();
    };
    this.step2 = function() {
        this.meth.gatherIngredients();
    };
    this.step3 = function() {
        this.meth.Create();
    };
    this.get = function() {
        return this.meth;
    };
}

function CookCrack() {
    this.crack = null;
    this.step1 = function() {
        this.crack = new Crack();
    };
    this.step2 = function() {
        this.crack.gatherIngredients();
    };
    this.step3 = function() {
        this.crack.Create();
    };
    this.get = function() {
        return this.crack;
    };
}

function Meth() {
    this.ingredients = 0;
    this.rock = 0;
    this.gatherIngredients = function() {
        this.ingredients = 10;
    };
    this.Create = function() {
        this.rock = 2;
    };
    this.say = function() {
        log.add("You just created " + this.rock + " rocks of meth using up " + this.ingredients + " ingredients.");
    };
}

function Crack() {
    this.ingredients = 0;
    this.rock = 0;
    this.gatherIngredients = function() {
        this.ingredients = 15;
    };
    this.Create = function() {
        this.rock = 3;
    };
    this.say = function() {
        log.add("You just created " + this.rock + " rocks of crack using up " + this.ingredients + " ingredients.");
    };
}

// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { 
          document.getElementById("builder").innerHTML = log; 
          log = ""; 
        }
    }
})();

function build() {
    var druglab = new drugLab();

    var cookMeth = new CookMeth();
    var cookCrack = new CookCrack();

    var meth = druglab.construct(cookMeth);
    var crack = druglab.construct(cookCrack);

    meth.say();
    crack.say();

    log.show();
  }