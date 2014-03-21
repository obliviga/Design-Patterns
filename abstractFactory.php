<?php 
include "global.php"; 
echo $headers;
?>

<h1>Abstraction Factory</h1>
<button onclick="create();return false" href="javascript:void(0);">Create</button><br><br>
<div class="well" id="log"></div>

<script>
    function Toyota(model) {
        this.model = model;
        this.say = function() {
            log.add("A Toyota " + model + " was created. ");
        };
    }

    function ToyotaFactory() {
        this.create = function(model) {
            return new Toyota(model);
        };
    }

    function Lexus(model) {
        this.model = model;
        this.say = function() {
            log.add("A Lexus " + model + " was created. ");
        };
    }

    function LexusFactory() {
        this.create = function(model) {
            return new Lexus(model);
        };
    }

    var log = (function() {
        var log = "";
        return {
            add: function(msg) {
                log += msg
            },
            show: function() {
                document.getElementById("log").innerHTML = log;
                log = "";
            }
        }
    })();


    function create() {

        var models = [];

        var toyotaFactory = new ToyotaFactory();
        var lexusFactory = new LexusFactory();

        models.push(toyotaFactory.create("Corolla"));
        models.push(toyotaFactory.create("Avalon"));

        models.push(lexusFactory.create("IS 217"));
        models.push(lexusFactory.create("RX 450"));

        for (var i = 0, len = models.length; i < len; i++) {
            models[i].say();
        }

        log.show();

    }
</script>