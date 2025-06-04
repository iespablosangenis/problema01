// con esta linea de codigo requiero la libreria que instalè con npm
const prompt = require('prompt-sync')()
const limpiarPantalla = require('clear')

// declarar una variable para almacenar lo que el usuario ingresa
const nombre = prompt('Ingresa tu nombre:')
const edad = Number(prompt('Ingresa tu edad:'))
limpiarPantalla()
// WARNING edad es de tipo STRING
// SI voy a tratar esta variable edad como NUMERO debo convertirla

// Mostrar el valor de edad para mi como programador
console.log('Hola',nombre, 'que lindo que tengas', edad, 'años')