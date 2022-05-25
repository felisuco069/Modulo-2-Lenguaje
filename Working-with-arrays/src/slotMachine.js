console.log("---- # Slot Machine ----");


class SlothMachine {
    constructor() {
        this.counter = 0;
    }
    play() {
        const value1 = Math.random() > 0.5 ? true : false;
        const value2 = Math.random() > 0.5 ? true : false;
        const value3 = Math.random() > 0.5 ? true : false;

        if (!value1 || !value2 || !value3) {
            this.counter += 1;
            console.log(this.counter);
            return console.log(`Good luck next time!!`);
        }
        else {
            this.counter += 1;
            console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
            this.counter = 0;
        }
    }
}


const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"