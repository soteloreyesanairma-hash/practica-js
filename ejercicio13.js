//Formas de crear una funcion
//F1: por declaracion
function hacerAlgo(){
  return "resultado"
}

//F2: por expresion
const saludo = function saludar(){
  return "Hola que tal"
}

console.log(saludo())

const suma = function sumar(num1, num2){
  return num1 + num2
}

console.log(suma(17, 20))

//Tipo de funciones: ANÓNIMA (funciones por expresion)
const mensaje = function(){
  return "Ingeneria de software"
}

console.log(mensaje)
console.log(mensaje())

//Para indicar este tipo de funciones se refiere ; antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidad ;
//(declaracion de la funcion)(ejecucion de la funcion)
(function (){
  console.log("Hola que tal");
})();

(
  function (nombre = ''){
    console.log('Bienvenido', nombre)
  }
)('Katerine');  

//Crea una funcion autoejecutable que calcule el promedio de 3 notas
//Estas funciones suelen EJECUTAR TAREAS sin retornar datos
(
  function (nota1, nota2, nota3){
    console.log((nota1 + nota2 + nota3) / 3) 
  }
)(14, 12, 20);