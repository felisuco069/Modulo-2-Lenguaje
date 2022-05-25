// console.log("---- # Concat -----");

// console.log("## Apartado A");


const array1 = [1, 4, 34, "resto", "suma", { id: 34, name: "Antonio", surname: "Pérez", }]
const array2 = [5, 6, 87, "Divisor", "Dividendo", { localidad: "Nerja", provincia: "Málaga", pais: "España", }]
const array3 = [5, 123123, 87, "Divisor", "Dividendo", { localidad: "Nerja", provincia: "Málaga", pais: "España", }]
const array4 = [5, 123, 87, "Divisor", "Dividendo", { localidad: "Nerja", provincia: "Málaga", pais: "España", }]

// const concat = (a, b) => {

//     return newArray = [...a, ...b];
// }

// console.log(concat(array1, array2));

console.log("## Apartado B");

const concatMulti2 = (...arrays) => arrays.flat(); // Sería más rápida

const concatMulti = (collection, ...arrays) =>

    arrays.reduce((result, array) => {
        if (Array.isArray(array)) {
            for (let elem of array) {
                result.push(elem);
            }
        } else { result.push(array) }
        return result;
    }, [...collection])



console.log(concatMulti2(array1, array2, array3, array4));
console.log(concatMulti(array1, array2, array3, array4));
