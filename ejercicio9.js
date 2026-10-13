let edades = [21, 25, 28, 32, 35, 39, 42, 44, 47, 50, 53, 55, 57, 58, 60];


//Mayor, menor, promedio
let mayor = 0, menor = edades[0], promedio = 0

edades.forEach(edad => {
  if (edad > mayor) mayor = edad
  if (edad < menor) menor = edad
  promedio += edad
})

promedio = (promedio / edades.length).toFixed(2)

console.log("Total de edades:", edades.length)
console.log("La edad mayor:", mayor)
console.log("La edad menor:", menor)
console.log("El promedio:", promedio)