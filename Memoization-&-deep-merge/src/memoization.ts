console.log("---- # Memoization ----");

console.log("## Apartado A");

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

// const memoize = (func: () => number): (() => number) => {
//   let results: number;
//   return () => {
//     if (!results) {
//       results = func();
//     }
//     return results;
//   };
// };
// const memoized = memoize(expensiveFunction);
// console.log(memoized()); // Una única llamada // 3.1415
// console.log(memoized()); // 3.1415
// console.log(memoized()); // 3.1415

// console.log("## Apartado B");
// let results: number;
// const memoize = (func: () => number): number =>
//   !results ? (results = func()) : results;

// const memoized = memoize(expensiveFunction);
// console.log(memoized); // Una única llamada // 3.1415
// console.log(memoized); // 3.1415
// console.log(memoized); // 3.1415

// console.log("## Apartado C");

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoize = (func: (R: number, T: string) => string) => {
  const results = {};
  return (...args: [number, string]) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      const [R, T] = args;
      results[argsKey] = func(R, T);
    }
    return results[argsKey];
  };
};

const memoizedGreet = memoize(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count);
