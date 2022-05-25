console.log("---- # Swap ----");

let a = "A";
let b = "B";

[a, b] = [b, a];

console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");