//Funcion 1:
//Crear una funcion que reciba un arreglo de numero y retorne como resultado un objeto
//indicandonos cuantos valores son pares e impares
function contarNumero(numeros){
  let pares = 0
  let impares = 0
  numeros.forEach(numero => {
    if(numero % 2 == 0){
      pares++
    }else{
      impares++
    }
  })
  return {pares: pares, imapares:impares}
}

console.log(contarNumero([12, 5, 19, 8, 3, 14, 7, 16]))

//Funcion 2:
//Escribir una funcion que retorne true|false dependiendo si el valor de entrada 
//corresponde a un número capicúa. 121, 444, 3223. Solo permite analizar valores  
//de hasta 5 digitos (99999)
//test, demostracion, console.log
function analizarNumero(listaNumero = []){
  let resultado = []
    listaNumero.forEach(numero =>{
      let invertido = 0
      let original = numero

      if(numero <= 99999){
        while (numero > 0){
          invertido = invertido * 10 + numero % 10
          numero = (numero -  numero % 10) / 10
        }
      }
      resultado.push(original === invertido ? true : false)
    })
    return resultado
  }

console.log(analizarNumero([121, 333,444,555]))
