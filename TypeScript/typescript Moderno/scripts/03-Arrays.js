"use strict";
let personas = ["Diego", "paco", "Fran"];
personas.push("Texto");
console.log(personas);
let years = [2012, 2013, 2022];
years.push(2014);
years.sort();
console.log(years);
//Tuplas
let pelicula = ["batman", true, 1990];
console.log(pelicula);
//enum -enumeracion
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Diego";
    DatosPersonales[DatosPersonales["dni"] = 777891] = "dni";
    DatosPersonales["direccion"] = "Piuchen";
    DatosPersonales["ciudad"] = "santiago";
})(DatosPersonales || (DatosPersonales = {}));
;
console.log(DatosPersonales.nombre, DatosPersonales.dni);
//Cast o convertir a otro tipo de dato
let txto_desconocido = "esto viene en peticion ajax";
let frase_final = txto_desconocido;
console.log(frase_final);
