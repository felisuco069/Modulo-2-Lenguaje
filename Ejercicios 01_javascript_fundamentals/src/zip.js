console.log("---- zip ----");

function zipObject(keys, values) {
    let newObject = {};
    for (elem in keys) {
        if (values[elem] !== undefined && values[elem] !== null)
            newObject[keys[elem]] = values[elem];
    }
    return newObject

}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}

// Está hecho el Challenge directamente