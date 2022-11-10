const modulo= require('./modulo.js')
const colors= require('colors') //colors.js es un paquete que permite ponerle colores a la consola

console.log(colors.rainbow(modulo.cuadrado(4).toString()))
