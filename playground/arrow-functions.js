'use strict';

const _ = require("lodash");

const myName = "Niels P.";

// Arrow function with parameter
var sayHello = (name) => {
    console.log(`Hello ${name}`);
};

// Arrow function within object - watch out for the this not being set
var obj = {
    name: myName,
    a: () => console.log('a', this.name),
    b: function() {
        console.log('b', this.name)
    },
    c() {
        console.log('c', this.name);
    }
};

obj.a();
obj.b();
obj.c();
sayHello(myName);