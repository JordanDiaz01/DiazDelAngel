const modulo= require('./modulo.js')
const colors= require('colors') //colors.js es un paquete que permite ponerle colores a la consola



// no debe correrse con ayuda de la extensión code runner porque bugea el paquete de colors y aparecen numeros raros
console.log(colors.rainbow(modulo.cuadrado(4).toString()))
