//------------- 1. IF ELSE ------------------------
// https://www.w3schools.com/js/js_if_else.asp

var x = 5

// if (x > 5) {
//   console.log('X es mayor a 5')
// } else if (x < 5) {
//   console.log('X es menor a 5')
// } else {
//   console.log('X es igual a 5')
// }

//------------- 2. SWITCH ------------------------
// https://www.w3schools.com/js/js_switch.asp

var dia

switch (new Date().getDay()) {
  case 0:
    dia = 'D'
    break
  case 1:
    dia = 'L'
    break
  case 2:
    dia = 'M'
    break
  case 3:
    dia = 'X'
    break
  case 4:
    dia = 'J'
    break
  case 5:
    dia = 'V'
    break
  case 6:
    dia = 'S'
    break

  default:
    break
}

console.log('Hoy es dia: ' + dia)
