
console.log("---- Hoisting ----");
console.log("## Apartado A");
var a = "good job!";

function f() {
    console.log(a);
    console.log(g());

    function g() {
        return a;
    }
    console.log(a);
}

f();

console.log("## Apartado B");

var a = 1;
(function () {
    console.log(a);//Como es autoinvocada no puede acceder a variables fuera de la función con lo que el resultado es undefined.
    var a = 2;
    b = 4;
    var c = 3;
})();

console.log(a); // imprimirá 1 porque está definida en la línea 228.
console.log(b); // imprimrá el 4 porque cuando ponemos b=4; js declara esta variable en el objeto window como var b; y dentro de la función le a dado valor.
console.log(c) // Da error porque no está declarada en el objeto window.

// Solución: Todo lo que se quiera imprimir se mete su console.log dentro de la función o declaramos las variables en el objeto window para luego cambiarle el valor con la función.

console.log("## Apartado C");

f();
var a = 1;

function f() {
    console.log(a);
    b = 4;
    var c = 3;
}

console.log(a);
console.log(b);
console.log(c);

//Podemos llamar a la función antes pero no hay cambios en la ejecución.
