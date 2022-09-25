"use strict";
;
//clase 
class fifa {
    constructor(titulo, categoria, edad, duracion, lanzado, actualizacion) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
        this.actualizacion = actualizacion;
    }
    mostrar() {
        console.log(this.titulo, this.duracion, this.lanzado);
    }
    actualizar(consola) {
        console.log("Buscando actualizacion...");
        return "Actualizado";
    }
}
let fifa23 = new fifa("Fifa 23", "Todos", 12, 45, true);
console.log(fifa23);
let finalFantasy = {
    titulo: "Final Fantasy VII",
    categoria: "RPG",
    edad: 16,
    duracion: 45,
    lanzado: true,
    mostrar() {
        console.log(this.titulo, this.duracion, this.lanzado);
    },
    actualizacion(consola) {
        console.log("Buscando actualizacion...");
        return "Actualizado";
    }
};
console.log(finalFantasy);
