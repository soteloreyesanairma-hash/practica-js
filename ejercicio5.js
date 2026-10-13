let frutas = ["Manzana", "plátano", "naranja", "fresa", "uva", "limón", "piña", "mango", "sandía", "melón"]

for (let i = (frutas.length - 1); i >= 0; i--){
  //console.log(frutas[i])
}

//Verificar si hay un elemento
let frutaBuscada = "Lima"
const resultado = frutas.find(fruta => fruta == frutaBuscada)
const encontrado = frutas.includes(frutaBuscada)
console.log(resultado, encontrado)
