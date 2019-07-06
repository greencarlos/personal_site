"use strict";

class Person{
  constructor(name, height, race) {
    this.name = name;
    this.height = height;
    this.race = race;	  
  }
}

const carlos = new Person('carlos', '5ft 8', 'African')
console.log(carlos)
