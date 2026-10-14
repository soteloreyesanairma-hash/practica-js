//Crear una funcion autoejecutable, que imprima cuantas horas, minutos y segundos
//faltan  para terminar el dia
(
    function(){
        let fecha = new Date()
        let horas = 23 - fecha.getHours()
        let minutos = 59 - fecha.getMinutes()
        let segundos = 59 - fecha.getSeconds()

        console.log("Faltan", horas, "horas", minutos, "minutos y ", segundos, "segundos");
    }
)();


//Crear una funcion autoejecutable que solicite un numero (expresado en segundos) y nos
//devuelva un saludo despues del tiempo indicado
(
    function(segundos = 0){
        setTimeout(function(){
            console.log("Hola, este es el tiempo indicado");
        }, segundos * 1000);
    }
)(3);