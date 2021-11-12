console.log("---- Reverse Text ----")

const textString = "Esta es la frase que usaré";

function reverseText(text) {

    const myArrayString = text.split([" "]).reverse();

    return myArrayString
}

console.log(reverseText(textString));