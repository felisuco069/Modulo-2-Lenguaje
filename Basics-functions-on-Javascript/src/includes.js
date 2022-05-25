console.log("----  Includes ----");

function includes(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return true;
    }
    return false
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

console.log("---- ## Challenge ----")

function includes(array, value) {

    const index = array.findIndex(element => element === value);

    if (index < 0) return false

    return true;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false