const peliculas = [
  ["El Conjuro", "Hereditary", "El Exorcista", "Psicosis", "Siniestro"],
  ["Toy Story", "Shrek", "Frozen", "El rey león", "Mi villano favorito"],
  ["Supercool", "¿Qué pasó ayer?", "La propuesta", "Son como niños", "Donde estan las rubias"]
]

//Mostrar las 15 peliculas en la consola
peliculas.forEach(generoPeliculas => {
  generoPeliculas.forEach(pelicula => {
    console.log(pelicula)
  })
})