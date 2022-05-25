// console.log("---- # Players Order -----");

// const getPlayersOrder = (players, turns) => {

//     for (let i = 0; i < turns; i++) {
//         players.splice(players.length, 1, players[i]);
//     }
//     return players.slice(turns);
// };

// // Un ejemplo:
// const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 0);
// console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

// hacerlo con el operador spred/rest y destructuring.

const getPlayersOrder = (players, turns) => {
    // debugger;
    if (turns === 0) return players
    if (turns > 0) {

        const [first, ...rest] = players;
        rest.push(first);

        return getPlayersOrder(rest, turns - 1)
    }
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]