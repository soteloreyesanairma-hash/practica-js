const paises = [
  ["Peru", "Argentina", "Brasil"],
  ["Alemania", "España", "Francia"],
  ["Japon", "China", "India"],
  ["Egipto", "Senegal", "Sudafrica"]
]

//Mostrar los paises de Asia (unicamente) utilizando forEach
paises[2].forEach(PaisesAsia => {
  console.log(PaisesAsia)
})

//Agregar 2 paises en la lista de america
paises[0].push("Bolivia")
paises[0].push("Ecuador")

console.log("------------------------------------------")

paises[0].forEach(PaisesAmerica => {
  console.log(PaisesAmerica)
})