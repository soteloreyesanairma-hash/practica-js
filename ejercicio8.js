const alimentos = [
  ["Manzana", "Pera", "Mango", "Sandia"], //Frutas
  ["Tomate", "Pepino", "Lechuga"], //Vegetales
  ["Res", "Pollo"], //Carnes
  ["Arroz"]  //Cereal
]

//¿Cuantos elementos tiene la matriz?
console.log("Cantidad elementos en la matriz", alimentos.length)

//¿Cual es el array de la matriz que tiene mas datos?
let mayor=0
alimentos.forEach(categoriaAlimentos => {
  if(categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
})
console.log("Array mas grande contiene:", mayor)

//¿Cual es el array de la matriz que tiene menos datos?
let menor = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
  if(categoriaAlimentos.length < menor){
    menor = categoriaAlimentos.length
  }
})
console.log("Array mas pequeño contien:", menor)

//¿Cuantos elementos en total tiene la matriz? considerando todos los arreglos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
})
console.log("En total tenemos:", sumatoria, "alimentos")