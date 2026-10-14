//Crear un obejto que contenga informacion computador
//cadenas, enteros, decimales, logicos, arreglos, nuevos obejetos

const computadora = {
  marca: "HP",
  ram: 16,
  velocidad: 4.82,
  encendida: true,
  accesorios: ["mouse", "teclado", "monitor"],
  procesador: [{marca: "intel"},{modelo: "core i7"},{nucleos: 8}]
}

console.log(computadora)
console.log(computadora.marca)
console.log(computadora.procesador[1].modelo)