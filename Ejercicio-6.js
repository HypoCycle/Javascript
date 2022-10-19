const lista = ["arroz", "zanahoria", "fairy", "huevos", "almendras"]
lista.push("Aceite de girasol")
console.log(lista);
lista.pop("Aceite de girasol")
console.log(lista);


const peliculasFavoritas = [
    { titulo: "El amor bajo el espino blanco", director: "Zhang Yiou", año: 2010},
    { titulo: "Fa yeung nin wa", director: "Wong Kar-Wai", año: 2000},
    { titulo: "La lengua de las mariposas", director: "José Luís Cuerda", año: 1999},
]

const peliculas2010 = peliculasFavoritas.filter(obj => obj.año === 2010)
console.log(peliculas2010);


function director({ director }) {
    return `${director}`;
}
const nombresDirector = peliculasFavoritas.map(director);
console.log(nombresDirector);


function titulo ({ titulo }) {
    return `${titulo}`;
}
const titulosPeliculas = peliculasFavoritas.map(titulo)
console.log(titulosPeliculas);

const directorYpelicula = nombresDirector.concat(titulosPeliculas);
console.log(directorYpelicula);

const dirYpeli = [...nombresDirector, ...titulosPeliculas];
console.log(dirYpeli);


