// https://www.w3schools.com/js/js_operators.asp

//------------- 1. OPERADORES ARITMETICOS ------------------------
/*
    - Suma: "+"
    - Resta: "-"
    - Multiplicacion: "*"
    - Division : "/"

    - Potencia: "**"
    - Modulo - resto de division: "%"

    - Incremento : "++"
    - Decremento : "--"

*/

{
  let x = 5
  let y = 6
  let z = x + y
}

//------------- 2. OPERADORES de ASIGNACION ------------------------
/*
    - "="	--> x = y -->	x = y
    - "+="	--> x += y -->	x = x + y
    - "-="	--> x -= y -->	x = x +- y
    - "*="	--> x *= y -->	x = x * y
    - "/=" ...
    - "%=" ...
    - "**=" ...

    ...

*/

{
  let x = 5
  let y = 6
  x += y
  //   console.log(x)
}

//------------- 3. OPERADORES de COMPARACION ------------------------

/*
    - "==" --> igual que	
    - "!=" --> distinto
    - ">" --> mayor 
    - "<" --> menor
    ...
*/
{
  let x = 5
  let y = 6
  //   console.log(x > y)
}

//------------- 4. OPERADORES LOGICOS ------------------------
/*
    - "&&" --> AND	
    - "||" --> OR
    - "!" --> NOT 

*/

//------------- 5. OPERADORES TYPE ------------------------
{
  let n = 1889
  console.log(typeof n)
}

//
// Tipo de Objeto
{
  let color1 = new String('verde')
  console.log(color1 instanceof String)
  console.log(typeof color1)

  var color2 = 'coral'
  console.log(color2 instanceof String)
}
