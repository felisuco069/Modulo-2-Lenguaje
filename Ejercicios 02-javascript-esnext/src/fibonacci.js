console.log("---- # Fibonacci ----");

// Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:

// fib(0) = 0;
// fib(1) = 1;

function fibonacciNumber(position) {
    if (position === 0) return 0;
    if (position === 1) return 1;
    const myArray = Array(position);
    myArray[0] = 0;
    myArray[1] = 1;

    for (let i = 2; i < position; i++) {

        myArray[i] = myArray[i - 2] + myArray[i - 1];
    }
    return myArray[position - 1]


}
console.log(fibonacciNumber(12));
// Y a partir de aqui, el siguiente término se calcula a partir de los dos anteriores:


// fib(2) = fib(1) + fib(0)

// fib(n + 1) = fib(n) + fib(n - 1)