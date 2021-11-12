// console.log("---- # Curry Setter ----");

// const julia = { name: "Julia", surname: "Álvarez", age: 19 };

// const set = <T extends object, K extends keyof T>(
//   username: T,
//   property: K,
//   value: T[K]
// ): T => {
//   const changedUser = { ...username };
//   changedUser[property] = value;

//   return changedUser;
// };

// const updatedJulia = set(julia, "age", 25);

// console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
// console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
// console.log(julia === updatedJulia); // false

console.log("## Opcional");

const julia = { name: "Julia", surname: "Álvarez", age: 19 };

const set = (property: string) => {
  return function <T extends object, K extends keyof T>(
    username: T,
    value: T[K]
  ): T {
    const changedUser = { ...username };
    changedUser[property] = value;
    return changedUser;
  };
};

const setName = set("name");
const setSurName = set("surname");
const setAge = set("age");

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
