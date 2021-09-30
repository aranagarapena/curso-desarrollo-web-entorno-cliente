'use-strict'

//------------- 1. OBJETOS ------------------------
// https://www.w3schools.com/js/js_objects.asp

// 1.1 CREAR UN OBJETO
const persona = {
  nombre: 'Iker',
  apellido: 'Arana',
  edad: 30
}

// console.log(typeof persona)

// 1.2 LEER PROPIEDADES - GET
// console.log(persona.apellido)

// 1.3 ESCRIBIR PROPIEDADES - SET
persona.apellido = 'Urkijo'
// console.log(persona.apellido)

// 1.4 METODOS

const persona2 = {
  nombre: 'Iker',
  apellido: 'Arana',
  edad: 30,
  nombreCompleto: function () {
    return this.nombre + ' ' + this.apellido
  }
}

// console.log(persona2.nombreCompleto())

// 1.5 CLASES
class Coche {
  // constructor
  constructor (nombre, anio) {
    this.nombre = nombre
    this.anio = anio
  }

  // metodos
  fecha () {
    let fecha = new Date()
    return fecha.getFullYear()
  }
}

var coche = new Coche('Audi', 2014)
console.log(coche.fecha())
