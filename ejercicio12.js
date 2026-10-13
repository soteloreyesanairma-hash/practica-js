//¿Que es una funcion?
//Conjunto de instrucciones que se pueden reutilizar
// Acepta parametros de salida y puede devolver algun valor (opcional)
//Pruebas, test
function saludar(){
  console.log("Hola")
}

//Correcto
function despedirse(){
  return "adios"
}

function verificarNota(calificacion = 0){
  //aprobado - desaprobado | operador ternario (condicion simple)
  return calificacion >= 10.5 ? "aprobado" : "desaprobado"
}

//La funcion retorna el neto, incrementando +150 por cada hijo
function calcularNeto(sueldoBasico, numeroHijos){
  return sueldoBasico + (numeroHijos * 150)
}

// >= 65 "Jubilacion activa", contrario, "fase laboral"
function verificarJubilacion(edad){
  //condicion ? valor_cumple : valor_no_cumple
  return edad >= 65 ? "Jubilacion actica" : "Fase laboral"
}

//Esta funcion resibe una lista de sueldos (no sabemos  la cantidad de sueldos)
//tambien se debe indicar si obtendremos el mayor
//la funcion retorna el mayor o menor sueldo dependiendo de su configuracion
function analizarSueldos(listaSueldo = [], obteneroMayor = true){
  let resultado = 0

  if(obteneroMayor){
    listaSueldo.forEach(sueldo => {
      if(sueldo >  resultado) resultado = sueldo
    })
  }else{
    resultado = listaSueldo[0]
    listaSueldo.forEach(sueldo => {
      if(sueldo < resultado) resultado = sueldo
    })
  }
  return resultado
}

//recibe un objeto, retorn un arreglo
function obtenerTelefonos(objeto = {}){
  return objeto.telefonos
}

//Retornar un obejto con los parametros
function crearObjeto(apellidos = '', nombres = '', edad = 0){
  return {
    apellidos: apellidos,
    nombres: nombres,
    edad: edad
  }
}

saludar()
console.log(despedirse())
console.log(verificarNota(6))
console.log(calcularNeto(3500, 0))
console.log(verificarJubilacion(20))
console.log(analizarSueldos([3500, 1800, 4100, 2200], false)) //1800

const perfil = {
  nombre: "Luis Mateo",
  dni: "61340981",
  telefonos: ["956771892", "978876512"]
}
console.log(obtenerTelefonos(perfil))
console.log(crearObjeto('Martinez Perez', 'Luis Miguel', 20))
