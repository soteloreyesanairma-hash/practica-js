//Funcion 3:
//Crear una funcion que solicite dos arreglos numericos, debera
//retornar la suma de ambos arreglos siempre que tengan el mismo numero
//de elementos, de lo contrario, devolver array vacio []
function sumarArreglos(arreglo1 = [], arreglo2 = []){
    let resultado = []
    if(arreglo1.length === arreglo2.length){
        arreglo1.forEach((numero, indice) => {
            resultado.push(numero + arreglo2[indice])
        })
    }
    return resultado
}
console.log("Funcion 3")
console.log(sumarArreglos([1,6,3],[4,8,9]))
console.log(sumarArreglos([1,2],[5,6,7]))



//Funcion 4:
//Crear una funcion que solicite un número positivo y retorne todos los divisores
//desde 1 hasta el numero que hayas indicado. El resultado se obtiene
//como arreglo. Ejemolo: 22 -> [1,2,11,22], ejemplo: 40 -> [1,2,4,5,8,10,20,40]
function obtenerDivisores(numero = 0){
    let resultado = []
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            resultado.push(i)
        }
    }
    return resultado
}


console.log("Funcion 4")
console.log(obtenerDivisores(22))
console.log(obtenerDivisores(40))
console.log(obtenerDivisores(100))