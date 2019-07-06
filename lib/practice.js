"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name, height, race) {
  _classCallCheck(this, Person);

  this.name = name;
  this.height = height;
  this.race = race;
};

var carlos = new Person('carlos', '5ft 8', 'African');
console.log(carlos);