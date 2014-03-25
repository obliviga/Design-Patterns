function Laptop( type, operatingSystem, processor ) {
 
  this.type = type;
  this.operatingSystem = operatingSystem;
  this.processor = processor;
 
}

Laptop.prototype.toString = function () {
  return "The " + this.type + " has an " + this.processor + " processor";
};
 
var mac = new Laptop( "MacBook Pro", "OS X Mavericks", "Intel i7" );
var pc = new Laptop( "Sony Vaio", "Windows 8.1", "AMD FX8" );
 
console.log( mac.toString() );
console.log( pc.toString() );