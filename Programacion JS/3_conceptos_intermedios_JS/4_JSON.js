'use-strict'

//------------- 1. JSON ------------------------
// https://www.w3schools.com/js/js_json_intro.asp

/* 
    JSON - JavaScript Object Notation
     - Formato de peso reducido para el intercambio de datos 
     - Es texto plano escrito en formato JSON
     - ¿Por qué usar JSON?
        - Es sintacticmanete muy parecido a la notacion de JS para crear objetos
        - JS puede parsearlos de forma muy facil a objetos
        - Es un tipo de datos multiplataforma

    - Caracteristicas:
        - Los datos vienen expresados como pares clave/valor
        - Cada par se separa con comas

    - Tipos de datos JSON:
        - string
        - numero
        - objeto
        - array
        - booleano
        - null
        - Ejemplo JSON:
            {"name":"John"}
    
    - Tipos de datos JS:
        - Los mismos que JSON más estos:
            - funciones
            - Fechas
            - undefined
            - Ejemplo JS:
                {name:'John'}

*/

// 1.1 CONVERTIR JSON a OBJETO JS
// https://www.w3schools.com/js/js_json_parse.asp

datos =
  '{"empleado":{"nombre":"Jon", "edad":30, "ciudad":"Orduña","comercial": true,"clientes": ["Bar Kirruli", "Restaurante Agape", "Cafeteria Nervion"],"genero": null}}'

// console.log(datos)
// console.log(typeof datos)

var objetoParseado = JSON.parse(datos)
// console.log(objetoParseado)
// console.log(typeof objetoParseado)
// console.log(objetoParseado.empleado.nombre)

// 1.2 CONVERTIR OBJETO JS a JSON
// https://www.w3schools.com/js/js_json_stringify.asp
var miJSON = JSON.stringify(objetoParseado)
console.log(miJSON)
console.log(typeof miJSON)
