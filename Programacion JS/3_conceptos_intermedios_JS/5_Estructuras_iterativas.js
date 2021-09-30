'use-strict'

//------------- 1. RECORRER ARRAYS - OTRAS FORMAS ------------------------
// https://www.w3schools.com/js/js_array_iteration.asp

const coches = ['Saab', 'Volvo', 'BMW']

// FOREACH
// https://www.w3schools.com/jsref/jsref_foreach.asp
coches.forEach(funcionRecorrer)

function funcionRecorrer (value) {
  //   console.log(value)
}

// MAP
const numeros = [45, 4, 9, 16, 25]
const numeros2 = numeros.map(multiplicar)

function multiplicar (value, index, array) {
  return value * 2
}

console.log(numeros2)

// FOR/IN - Itera las propiedades de un objeto
// https://www.w3schools.com/js/js_loop_forin.asp
miJSON =
  '{"empleado":{"nombre":"Jon", "edad":30, "ciudad":"Orduña","comercial": true,"clientes": ["Bar Kirruli", "Restaurante Agape", "Cafeteria Nervion"],"genero": null}}'
objetoParseado = JSON.parse(miJSON)

for (const propiedad in objetoParseado.empleado) {
  console.log(objetoParseado.empleado[propiedad])
}

// FOR/OF - Itera cualquier tipo de objeo iterable - Array, String, Map, NodeLists...
// https://www.w3schools.com/jsref/jsref_forof.asp
let lenguaje = 'JavaScript'
for (let x of lenguaje) {
  console.log(x)
}
