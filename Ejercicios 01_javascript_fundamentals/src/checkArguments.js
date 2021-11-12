console.log("---- checkArguments ----");

function f(input) {
    // El ternario que se pide para abreviar lo de abajo.
    const result = (input === undefined) ? "Unknown" : (input === null) ? "" : input;

    //     var result;
    //     if (input === undefined) {
    //         result = "Unknown";
    //     } else if (input === null) {
    //         result = "";
    //     } else {
    //         result = input;
    //     }
    return result;
}

console.log(f("hola"));