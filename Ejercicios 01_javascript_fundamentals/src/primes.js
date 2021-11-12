

console.log("---- primes ----");

function showPrimes(from, to) {
    // bucle que divide el número to entre los números primos menores que el;
    for (let i = from; i <= (to - from); i++) {
        let myArray = [];

        for (let j = 1; j <= to; j++) {
            if (i % j === 0) myArray.push(j);
        }
        if (myArray.length === 2) console.log(`${i} is Prime!`)
        else console.log(`${i} is not a prime!`)
    };
    // Si el resto es cero devuelve is not a prime
    // si ninguno da cero devuelve prime

}
showPrimes(1, 100);

// Para saber si un número es primo o compuesto basta con dividirlo por los números primos menores que él hasta llegar a un cociente igual o menor que el divisor
console.log("---- ## Challenge ----");

function showPrimes(from, to) {
    // bucle que divide el número to entre los números primos menores que el;
    for (let i = from; i <= (to - from); i++) {
        let myArray = [];
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) myArray.push(j);
        }
        if (myArray.length === 2) console.log(`${i} is Prime!`)
        else console.log(`${i} is not a prime!`)
    };
    // Si el resto es cero devuelve is not a prime
    // si ninguno da cero devuelve prime

}
showPrimes(1, 100);
