let personas:string[] = ["Diego", "paco", "Fran"];
personas.push("Texto");
console.log(personas);


let years:number[]= [2012,2013,2022];
years.push(2014);
years.sort()
console.log(years);

//Tuplas
let pelicula:[string,boolean,number] = ["batman",true,1990];
console.log(pelicula);

//enum -enumeracion
enum DatosPersonales {
    nombre="Diego",
    dni=777891,
    direccion= "Piuchen",
    ciudad="santiago"
};
console.log(DatosPersonales.nombre,DatosPersonales.dni);

//Cast o convertir a otro tipo de dato
let txto_desconocido:any ="esto viene en peticion ajax";
let frase_final:string = <string>txto_desconocido;
console.log(frase_final);