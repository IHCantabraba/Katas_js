/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const peliculasPequeñas = []
const peliculasMedianas = []
const peliculasGrandes = []

for (const movie of movies) {
  for (const movieInfo in movie) {
    if (movieInfo == 'durationInMinutes') {
      if (movie[movieInfo] < 100) {
        peliculasPequeñas.push(movie)
      } else if (movie[movieInfo] > 200) {
        peliculasGrandes.push(movie)
      } else {
        peliculasMedianas.push(movie)
      }
    }
  }
}
console.log(peliculasPequeñas)
console.log(peliculasMedianas)
console.log(peliculasGrandes)
