console.log("---- # Trazas por consola ----");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];
//original
// const run = async (triggers) => {
//   console.log("first");
//   triggers.forEach((t) => t());
// };

const run = async (triggers) => {
  const third = await triggers[0]();
  const second = await triggers[1]();
  console.log("first");
};

run(triggers);
