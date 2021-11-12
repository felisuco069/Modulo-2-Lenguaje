console.log("---- # Acceso en profundidad ----");

console.log("# Acceso en profundidad");

// const myObject: object = {
//   a: 1,
//   b: {
//     c: null,
//     d: {
//       e: 3,
//       f: {
//         g: "bingo",
//       },
//     },
//   },
// };

// const deepGet = (obj: object, ...prop: string[]) => {
//   if (prop.length === 0) return obj;

//   if (prop.length === 1) return obj[prop[0]];

//   for (let i = 0; i < prop.length; i++) {
//     obj = obj[prop[i]];
//   }
//   return obj;
// };
// console.log(deepGet(myObject, "x")); // undefined
// console.log(deepGet(myObject, "a")); // 1
// console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
// console.log(deepGet(myObject, "b", "c")); // null
// console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
// console.log(deepGet(myObject)); // {a: 1, b: {...}}

console.log("---- ## Apartado B ----");
const myObject = {};

const deepSet = (value: number, object: Object, ...prop: string[]) => {
  if (prop.length === 0) return object;

  if (prop.length === 1) {
    object[prop[0]] = value;

    return object;
  }
  for (let i = 0; i < prop.length; i++) {
    if (object.hasOwnProperty(prop[i])) {
      if (i === prop.length - 1) {
        object[prop[i]] = value;
      } else {
        object = object[prop[i]];
      }
    } else if (i < prop.length - 1) {
      object[prop[i]] = {};
      object = object[prop[i]];
    } else {
      object[prop[i]] = value;
    }
  }
  return object;
};
// debugger;
deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject)); // {a: { b: 1}}
debugger;
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject)); // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject)); // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject)); // Do nothing // {a: 3}
