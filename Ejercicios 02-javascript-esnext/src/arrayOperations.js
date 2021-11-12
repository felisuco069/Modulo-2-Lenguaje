console.log("----# Array Operations----");

console.log("## Apartado A");
const myArray = ["a", "b", 3, 4, 5, "hello", { id: 3, name: "Felix", }]

const head = array => {
    const [first, ...rest] = array;
    return first;
};

console.log(head(myArray));

console.log("## Apartado B");

const tail = array => {
    const [first, ...rest] = array;
    return rest
};
console.log(tail(myArray));

console.log("## Apartado C");

const init = array => {

    return array.slice(0, -1)
};
console.log(init(myArray));

console.log("## Apartado D");

const last = array => {
    return array.slice(array.length - 1)
};
console.log(last(myArray));