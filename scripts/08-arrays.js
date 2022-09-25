let personas = ["Victor","paco","pepe", "juan", "antonio"];

//let busqueda = personas.find(persona =>  persona === "pepe");

//buscaar en un array -find index
let busqueda =personas.findIndex(persona => persona === "julietta");

console.log(busqueda);

//crear array basandome en un objeto iterable
let array_letras = Array.from("Diego Romero");
console.log(array_letras);