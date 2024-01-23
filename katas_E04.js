/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

for (let i = 0; i <= avengers.length; i++) {
  if (avengers[i] === 'HULK') {
    console.log(avengers[i])
  }
}

/*1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avenger = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
avengers.shift()
avengers.unshift('IRONMAN')
console.log(avengers)

/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

console.log(avengers.length)

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];*/

let rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Sumer')
console.log(rickAndMortyCharacters)
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

/*1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters.shift()
console.log(
  `El primer elemento del array es: ${
    rickAndMortyCharacters[0]
  } y el útlimo elemento del array es: ${
    rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
  }`
)

/*1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)
