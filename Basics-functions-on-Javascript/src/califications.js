console.log("---- califications ----");

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const arrayNotes = classResults => Object.values(classResults);
const getSumNotes = object => object.reduce((sumNotes, note) => sumNotes + note, 0);

function printAverage(classResults) {
    const averageGrade = getSumNotes(arrayNotes(classResults)) / arrayNotes(classResults).length;
    const roundAverage = Math.floor(averageGrade);
    switch (roundAverage) {
        case 10: console.log(`La nota media de la clase es ${averageGrade} y tiene una calificación de matrícula de honor`);
            break;
        case 9: console.log(`La nota media de la clase es ${averageGrade} y tiene una calificación de sobresaliente`);
            break;
        case 8: case 7: console.log(`La nota media de la clase es ${averageGrade} y tiene una calificación de notable`);
            break;
        case 6: console.log(`La nota media de la clase es ${averageGrade} y tiene una calificación de bien`);
            break;
        case 5: console.log(`La nota media de la clase es ${averageGrade} y tiene una calificación de suficiente`);
            break;
        case 4: console.log(`La nota media de la clase es ${averageGrade} y tiene una calificación de insuficiente`);
            break;
        default: console.log(`La nota media de la clase es ${averageGrade} y tiene una calificación de muy deficiente`);
            break;
    }
}

printAverage(eso2o);