// console.log("---- Subsets ----");

// function subsets(word) {
//     const myArray = [];
//     for (let i in word) {
//         word = word.slice(1)
//         myArray.push(word)
//     }
//     return myArray;
// }

// Ejemplo
// console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

console.log("---- ## Challenge ----");

function subsets([...word]) {
    return word.map((element, index) => {
        return word.slice(index).join("");
    })

};

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
// console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
