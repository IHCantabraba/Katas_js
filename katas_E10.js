/* Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
 */

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let sum = param.reduce((previous, current) => (current += previous))
  console.log(sum)
  let promedio = sum / param.length
  console.log(`El promedio es: ${promedio.toFixed(2)}`)
}

average(numbers)
