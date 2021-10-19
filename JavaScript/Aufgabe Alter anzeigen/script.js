const alter = prompt("Bitte gebe ein Alter in Jahren ein!");

const alterInMonaten = alter * 12;
console.log(alter + " Jahre in Monaten " + alterInMonaten);

const alterInTagen = alterInMonaten * 365;
console.log(alter + " Jahre in Tagen: " + alterInTagen);

const alterInStunden = alterInTagen * 30;
console.log(alter + " Jahre in Stunden: " + alterInStunden);

/* if (alter < 0) {
    console.log("Fehler: Die Altersangabe kann nicht negativ sein.");
} */

alter >0 ? console.log("") : console.log("Fehler: Die Altersangabe kann nicht negativ sein.")