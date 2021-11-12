var surname = "Pérez";
var person = {
    name: "Juan",
    surname: "González",
    wife: {
        name: "Ana",
        surname: "Jiménez",
        getSurname: function () {
            return this.surname;
        },
    },
};

console.log(person.wife.getSurname()); // Jiménez porque getSurname es llamado, es decir, su this es wife entonces devuelve surname del subobjeto wife.
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); // undefined porque surnameFunction solo es la función del obejeto wife pero para llamarla necesita un objeto como argumento para que de este, con el this, devuelva el surname.
console.log(surnameFunction.call(person)); // González porque en este caso si le decimos que surnameFunction es llamada (call) con el objeto person y en este caso el this lo toma de person que es el objeto que lo llama.

// Resolví antesde ejecutar.