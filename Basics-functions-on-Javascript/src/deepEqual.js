// console.log("---- deepEqual ----");

// console.log("## Apartado A");

// var user = { name: "María", age: 30, };
// var clonedUser = { name: "María", age: 30, };

// console.log(user === clonedUser); // false

// function isEqual(a, b) {
//     if (Object.keys(a).length !== Object.keys(b).length) return false

//     for (prop in a) {
//         let equal = a.hasOwnProperty(prop) && b.hasOwnProperty(prop);
//         if (!equal || !(a[prop] === b[prop])) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isEqual(user, clonedUser)); // true

console.log("---- ## Apartado B ----");

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
    f: function greet() {
        console.log("es una función")
    }
};
var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
    f: function greet() {
        console.log("es una función")
    }
};


function isDeepEqual(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false

    for (prop in a) {
        let equal = a.hasOwnProperty(prop) && b.hasOwnProperty(prop);

        if (equal === false) return false

        if (typeof (a[prop]) === "object") {

            return isDeepEqual(a[prop], b[prop]);
        }

        if (typeof (a[prop]) === "function") {

            let functionA = a[prop].toString();
            let functionB = b[prop].toString();

            if (functionA !== functionB) return false
        }

        if (a[prop] !== b[prop]) {
            return false;
        }
    }
    return true
}
console.log(isDeepEqual(user, clonedUser));

