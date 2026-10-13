const persona = {
  apellidos: "De La Cruz Sotelo",
  nombres: "Jesus Rodrigo",
  hablar: function() { return "Hola que tal" },
  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Sunampe",
    direccion: "AV San Antonio 211",
    mostrar: function() { 
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion} - ${this.apellidos}`
    }
  }
}

console.log(persona.hablar())
console.log(persona.locacion["departamento"])
console.log(persona.locacion.mostrar())