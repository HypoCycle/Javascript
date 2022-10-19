const fechaHoy = new Date()
console.log(fechaHoy);

const fechaNacimiento = new Date(1990, 6, 27)

const estoyVivo = fechaHoy.getTime() > fechaNacimiento.getTime()
console.log(estoyVivo);

const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth() + 1
console.log(mesNacimiento);

const añoNacimiento = fechaNacimiento.getFullYear()
console.log(añoNacimiento);
