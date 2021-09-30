'use strict'

//------------- 1. ARRAYS ------------------------
// https://www.w3schools.com/js/js_arrays.asp

// 1.1 CREAR UN ELEMENTO
const coches = ['Saab', 'Volvo', 'BMW']

const frutas = new Array('Platano', 'Naranaja', 'Mango')

// 1.2 ACCEDER A UN ELEMENTO
let x = coches[0]
// console.log(x)

// 1.3 RECORRER UN ARRAY

for (let i = 0; i < coches.length; i++) {
  //   console.log(coches[i])
}

// 1.3 PROPIEDADES Y METODOS PRINCIPALES
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#
// https://www.w3schools.com/js/js_array_methods.asp

// devuelve el numero de elemntos del array
coches.length

// Ordena el array
coches.sort()

// le da la vuelta a los elementos
coches.reverse()

// aniadir otro elemento al final
coches.push('Audi')

// añade un elemento al principio del array
coches.unshift('Mercedes')

// borra el ultimo elemento
coches.pop('Audi')

// borra el primer elemento
coches.shift()

// convierte todo a String
coches.toString

// INDICES

// devuelve el indice donde aparece el elemento
coches.push('Audi')
// console.log(coches.indexOf('Audi'))

// // develve el ultimo indice donde aparece aparece el elemento
// coches.push('Audi')
// console.log(coches)
// console.log(coches.lastIndexOf('Audi'))

// devuelve true o false en funcion de si un array incluye o no un elemento
console.log(coches.includes('Audi'))
