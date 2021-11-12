console.log("---- biggestWord ----");

function biggestWord(phrase) {
    const arrayWords = phrase.split([" "]);
    let longestWord = "";
    for (word of arrayWords) {
        longestWord = word.length > longestWord.length ? word : longestWord;
    }
    return `La palabra más larga de la frase introducida es ${longestWord}`
}
// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"