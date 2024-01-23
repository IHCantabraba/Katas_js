/* Completar la funcion que tomando un array de strings como argumento devuleve el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
} */
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let lengths = param.map((element) => element.length)
  console.log(`el array de longitudes es: ${lengths}`)
  let lengthMaximum = Math.max(...lengths)
  console.log(`El elemento más largo tiene: ${lengthMaximum} carcateres`)

  let repetedElements = []
  for (let i = 0; i <= lengths.length; i++) {
    if (lengths[i] == lengthMaximum) {
      repetedElements.push(avengers[i])
    }
  }
  console.log(repetedElements.length)
  if (repetedElements.length >= 1) {
    console.log(repetedElements[0])
  }
}
findLongestWord(avengers)
