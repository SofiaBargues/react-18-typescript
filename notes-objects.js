// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
    // artist: 'ABBA',
  },
};
const simpleRecord = {
  name: "foo",
  year: 2012,
};

// Leer valor de propiedad
console.log(recordCollection[2468]);
// Concatenar lecturas
console.log(recordCollection[2468]["artist"]);

console.log(simpleRecord["name"]);
console.log(simpleRecord.name);
let nombre = simpleRecord.name;
console.log(nombre);

nombre = "bar";
simpleRecord.name = "bar";
simpleRecord["name"] = "barco";

console.log(nombre);
console.log(simpleRecord.name);

// Asignar valor a propiedad
simpleRecord["name"] = "pepito";

console.log(simpleRecord["name"]);

// ------------------------------
// Crear una nueva propiedad
simpleRecord["altura"] = 174;
console.log(simpleRecord);

console.log(simpleRecord.altura);

let altura = "120";
simpleRecord.altura = "120";
console.log(simpleRecord.altura);

// ------------------------------

let nombrePropiedad = "peso";
simpleRecord[nombrePropiedad] = "25";
console.log(simpleRecord[nombrePropiedad]);

simpleRecord;

function imprimirValorDePropiedad(objeto, propiedad) {
  console.log(objeto[propiedad]);
}
imprimirValorDePropiedad(simpleRecord, "name");

function imprimirInfoRecord(objeto, recordID, propiedad) {
  console.log(objeto[recordID][propiedad]);
}
imprimirInfoRecord(recordCollection, "2468", "albumTitle");
