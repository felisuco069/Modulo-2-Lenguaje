// console.log("---- # Console ----");

// console.log("## Apartado A");

// // Intenta razonar cual será el resultado de la consola al ejecutar este código:

var a = 1;
let b = 2;

{
  try {
    console.log(a, b);// Debería mostrar nada. Intenta entrar aquí pero al no estar inicializada b en este punto, peta. Recordemos que let tiene ámbito de bloque y al estar dentro de llaves y tener el let dentro, se hace un ambito donde hace especie de hosting.
  } catch (error) { }
  let b = 3;
  console.log(a, b);// Mostrará 1 y 3.
}

console.log(a, b); // Mostrará 1 2 ya que el let tiene ambito de bloque y se queda dentro del objeto creado con try y catch.

() => {
  console.log(a); // Esto no mostrará nada porque la función no se ejecuta.
  var a = 5;
  let b = 6;
  console.log(a, b); // Esto no mostrará nada porque la función no se ejecuta.
};

console.log(a, b); // Muestra lo mismo que el anterior al no haber cambios, 1 y
// console.log("## Apartado B");

// // Sin tocar ninguno de los `console.log` anteriores, modifica ligeramente el código para que muestre la siguiente secuencia:

// var a = 1;
// let b = 2;

// {
//   let b = 3;
//   try {
//     console.log(a, b); // Muestra 1 y 3.
//   } catch (error) { }
//   console.log(a, b);// Mostrará 1 y 3.
// }

// console.log(a, b); // Mostrará 1 2 porque lo que se modifique dentro del try o catch se queda ahí.

// (() => {
//   var a = 5;
//   console.log(a); // 5 que se acaba de declarar.
//   let b = 6;
//   console.log(a, b); // 6 5, los valores en la función autoinvocada.
// })();

// console.log(a, b); // Muestra 1 y 2. La función autoinvocada no cambia los valores de las variables 


// // 1 3
// // 1 3
// // 1 2
// // 5
// // 5 6
// // 1 2
