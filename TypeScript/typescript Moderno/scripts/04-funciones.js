"use strict";
//uso normal
function saludo(nombre) {
    return `un saludo para ${nombre}`;
}
console.log(saludo("Diego Romero"));
//nada void
function mostrarFecha() {
    console.log(`23-03-2022`);
}
mostrarFecha();
//  never  /fin de la aplicaccion 
function finApp() {
    throw new Error("la aplicaccion se ha cerrado...");
}
//finApp();
function mostrarPais(pais, continente) {
    let resultado = "Faltan Datos";
    if (pais && continente) {
        resultado = pais + " " + continente;
    }
    return resultado;
}
console.log(mostrarPais("Chile", "Sur America"));
//tipo funcion
let grupos;
grupos = function (datos) {
    return "mis grupos favoritos son" + " " + datos.toString();
};
console.log(grupos(["motorhead", "la renga", "metallica"]));
function tekken(personaje, Atuendo) {
    return `El personaje es ${personaje} y lleva el atuendo ${Atuendo}`;
}
console.log(tekken("paul", "comprado"));
