/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".*/
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
var mayoresEdad = []
var menoresEdad = []
for (const user of users) {
  for (const userinfo in user) {
    if (userinfo === 'years') {
      if (user[userinfo] < 18) {
        menoresEdad.push(user['name'])
      }
    }
  }
}
console.log(`Usuarios menores de edad: ${menoresEdad}`)

for (const user of users) {
  for (const userinfo in user) {
    if (userinfo === 'years') {
      if (user[userinfo] >= 18) {
        mayoresEdad.push(user['name'])
      }
    }
  }
}
console.log(`Usuarios mayores de edad: ${mayoresEdad}`)
