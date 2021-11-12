console.log("---- # Morse ----");

const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

const message = "Buen a";

const morseMessage = (words: string): string => {
  const newMessage = words.toLocaleLowerCase();
  let traspiledMessage = "";
  for (let i = 0; i < newMessage.length; i++) {
    if (newMessage[i] !== " ") {
      traspiledMessage = traspiledMessage.concat(
        " ",
        morseAlphabet[newMessage[i]]
      );
    } else {
      traspiledMessage = traspiledMessage.concat("", " ");
    }
  }
  console.log(typeof traspiledMessage);
  return traspiledMessage.trim();
};
const morseM = morseMessage(message);

const binariMessage = (morse: string): string => {
  let binari = "";
  for (let i = 0; i < morse.length; i++) {
    if (morse[i] === ".") {
      binari = binari.concat("1", "0");
    } else if (morse[i] === "-") {
      binari = binari.concat("1", "1", "1", "0");
    } else if (morse[i] === " " && morse[i + 1] === " ") {
      binari = binari.concat("0", "0", "0", "0", "0", "0");
      i++;
    } else if (morse[i] === " ") {
      binari = binari.concat("0", "0");
    }
  }
  return binari.slice(0, binari.length - 1);
};
const finalyMessage = binariMessage(morseM).split("");

async function printMessage(elem: string[]) {
  for (let i of elem) {
    let simbol = await waiter(i);
    console.log(simbol);
  }
}

function waiter(arr: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 100);
  });
}
printMessage(finalyMessage);
