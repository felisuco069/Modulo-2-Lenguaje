console.log("---- cloneMerge ----");

console.log("## Apartado A");

function clone(source) {
    const clone = { ...source }
    return clone
}
console.log(clone({ id: 2, name: "Félix", surname: "Franco" }));

console.log("## Apartado B");

function merge(source, target) {
    // let object1 = clone(source);
    // let object2 = clone(target);
    let newArray = { ...target, ...source }
    return console.log(newArray)
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}