/* completa la funcion para que tomando dos números 
  como argumentos devuelva el más alto. 
  ----------------------------------------
  function sum(numberOne , numberTwo) {
    // insert code
} */

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(
      `El número más alto de ${numberOne} y ${numberTwo} es: ${numberOne}`
    )
  } else if (numberTwo > numberOne) {
    console.log(
      `El número mñas alto de ${numberOne} y ${numberTwo} es: ${numberTwo}`
    )
  } else {
    console.log(`Los números ${numberOne} y ${numberTwo} son iguales`)
  }
}

sum(5, 8)
sum(9, 6)
sum(3, 3)
