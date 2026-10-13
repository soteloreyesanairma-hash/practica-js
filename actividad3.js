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
function analizarNumero(listaNumero = [], numeroCapicua = true){
  let resultado = 0
  if(numeroCapicua){
    listaNumero.forEach(numero =>{
      if(numero = resultado) resultado = numero
    })
  }
}
