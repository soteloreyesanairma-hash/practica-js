//Construir un objeto con los datos de una pelicula
const pelicula = {
  titulo: "Son como niños",
  anio: 2010,
  idioma: ["Ingles", "Español"],
  duracionMin: 102,
  generos: "Comedia",
  presupuesto: 80.000,
  recaudacion: 271.430,
  elenco: [
    {nombre: "Adam Sandler", personaje: "Lenny Feder", rol: "Protagonista"},
    {nombre: "Kevin James", personaje: "Eric Lamonsoff", rol: "Protagonista"},
    {nombre: "Chris Rock", personaje: "Kurt Mckenzie", rol: "Protagonista"},
    {nombre: "David Spade", personaje: "Marcus Higgins", rol: "Protagonista"},
    {nombre: "Rob Schneider", personaje: "Rob Hilliard", rol: "Protagonista"},
    {nombre: "Salma Hayek", personaje: "Roxana", rol: "Protagonista"},
    {nombre: "Maria Bello", personaje: "Saly Lamonsof", rol: "Protagonista"},
    {nombre: "Maya Rudolph", personaje: "Deanne McKenzie", rol: "Protagonista"}
  ],
  sinopsis: "Grupo de 5 amigos que ganaron un campeonato de baloncesto y se volvieron a reencontrar",
  direccion: "Dennis Dugan",
  escritores: ["Adam Sandler", "Fred Wolf"]
}

console.log(pelicula.titulo)
console.log(pelicula.anio)
console.log(pelicula.escritores[1])
console.log(pelicula.elenco[0].nombre)
