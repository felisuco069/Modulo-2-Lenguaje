console.log("---- Dices ----");

const calculateNum = () => Math.floor(Math.random() * 6 + 1)

const throwDices = () => {

    let throwDice1, throwDice2;
    return {
        throw: function () {
            throwDice1 = calculateNum();
            throwDice2 = calculateNum();
        },
        print: function () {
            if (throwDice1 !== throwDice2) {
                console.log(`${throwDice1} - ${throwDice2}, sigue tirando`);
            } else if (throwDice1 !== undefined) {
                console.log(`Estupendo Doble ${throwDice1}!!! Tu premio es una palmera de la Kiki`);
            } else {
                console.log("Tienes que tirar primero")
            }
        },
        reset: function () {
            throwDice1 = undefined;
            throwDice2 = undefined;
        }
    }
}
const myDices = throwDices();
myDices.throw()
myDices.print()
myDices.reset()
myDices.print()
myDices.throw()
myDices.print()
