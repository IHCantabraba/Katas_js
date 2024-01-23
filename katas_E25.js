/* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas. */

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
var totalCount = 0
for (const product of products) {
  for (const productInfo in product) {
    if (productInfo == 'sellCount') {
      totalCount += product[productInfo]
    }
  }
}
console.log(Math.floor(totalCount / products.length))
