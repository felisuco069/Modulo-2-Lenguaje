console.log("---- args ----");

function f(a, { b } = {}, c = 100) {
    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c, c === arguments[2]);
}

// console.log("---- Apartado A ----");

// f("JS rocks!", { b: "b" });

// Explicación de lo que muestra.
// // El primero muestra la longitud del argumento introducido de la función, en este caso 2.
// // El resto muestra, por orden, el valor de cada variable seguido de true o false dependiendo de si este valor coincide con el del elmento del argumento donde se encuentra. a es igual al primer elemento del argumento de la función. El segundo dará false porque b es b pero no es lo mismo que el elemento segundo que es un objeto con un elemento b. El tercero es false porque el valor de la variable es 100 pero no hay tercer argumento por lo que el resultado es undefined.


console.log("---- Apartado B ----");

// f({ b: "b" });
// // En este toma el objeto único como a. Por lo tanto, el primer console.log devuelve 1 por el único elemento que hay. Como a es el objeto y el elemento primero es el objeto entero nos devuelve true. El segunto, como el argumento de b no existe, b lo devuelve como undefined y al igualar el valor de b (undefined) con el valor del segundo elemento (undefined) nos devuelve true, por ser los dos iguales. El último, como la función ya le asigna 100 a c lo imprime por consola pero al igualarlo con el tercer elemento da false porque no existe.

console.log("---- Apartado C ----");

f("JS sucks!", null, 13);

// En este ejercicio se para la ejecución porque b no existe y la salvedad que ponemos es solo si es undefined, que nos devolvería un objeto vacío. Con null no entra en esta excepción.
