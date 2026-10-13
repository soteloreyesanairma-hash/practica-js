//Objetos = JSON (JavaScript Object Notation)
//Estructura que guarda datos utilizando {key: value}
let perfil = {
  apellidos: "De La Cruz Sotelo",
  nombres: "Jesus Rodrigo",
  edad: "18",
  telefono: ["934155450", "999222333", "999683460"],
  formacion: [
    {nivel: "primaria", nombre: "San Jose", anio: 2014 },
    {nivel: "Secundaria", nombre: "Simon Bolivar", anio: 2020 },
    {nivel: "Superior", nombre: "Senati", anio: 2025 }
  ],
  habilidades: [
    {skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"]},
    {skill: "Lenguajes de programacion", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"]},
    {skill: "Sistemas operativos", herramientas: ["Windows", "Linux", "Android"]}
  ]
}

console.log(perfil.habilidades[1].herramientas)

//¿Cual es el nombre del centro de formacion secundaria?
console.log(perfil.formacion[1].nombre)

//¿Cuantos telefonos tiene la persona?
console.log(perfil.telefono.length)

//Mostrar cada uno de los motores de base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
})