let nombre = "Alf red";
let Apellido = "No bel";

console.log(Apellido.charAt(4));

let estudiante = "Estudiante";
let estudianteMayus = "ESTUDIANTE";
let estudianteMinus = "estudiante";

let numStr = estudiante.length;
console.log(numStr);

let primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre);

let últimaLetraApellido = Apellido.charAt(4);
console.log(últimaLetraApellido);
console.log(estudiante.toUpperCase());

let sinEspacios = (nombre + Apellido).trim().length;
console.log(sinEspacios);

let isIncluded = estudiante.includes(`${nombre}`);
console.log(isIncluded)
