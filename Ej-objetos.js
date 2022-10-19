const datosPersonales = 
    { 
        nombre: "Sigmund",
        apellido: "Fredo",
        edad: 27,
        altura: 178,
        eresDesarrollador: true
    }

const edad = datosPersonales.edad
console.log(edad);

const listaAmigos = [
    { datosPersonales },
    { nombre: "Idio", apellidos:"Tuin", edad: 23, altura: 189},
    { nombre: "Ambrosio", apellidos:"Manzano", edad: 22, altura: 169 }
]

const listaOrdenada = listaAmigos.sort((a, b) => b.edad - a.edad)
console.log(listaOrdenada);
