console.log("---- values ----");

console.log("Apartado values");

function values(obj) {
    let myArray = [];
    for (const prop in obj) {
        myArray.push(obj[prop]);
    };
    return myArray;
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

console.log("Apartado ## Challenge");

//No lo entiendo, no se que hay que hacer.

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("I'm walking");
    };
}

var john = new Person("John");
john.age = 23;
console.log(Object.keys(john))
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
