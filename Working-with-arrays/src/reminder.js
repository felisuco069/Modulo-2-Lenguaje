console.log("---- # Reminder ----");

class Reminder {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        let self = this;
        setTimeout(function () {
            console.log(`Your reminder after ${delay} seconds is: ${self.text}`);
        }, delay * 1000);
    }
}
const message = new Reminder("Hola");
//dentro de la función del prototype de Reminder, remindMe, el objeto this es el objeto window y en este no está la propiedad text con lo que al pintar en consola escribe undefined. Para solucionarlo podemos usar una variable intermedia que tome el valor de this para anclarla y usarla en el setTimeout.
message.remindMe(2);