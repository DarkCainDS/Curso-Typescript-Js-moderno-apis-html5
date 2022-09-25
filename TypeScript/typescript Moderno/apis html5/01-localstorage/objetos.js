let mi_objeto = {
    nombre: "Diego",
    apellido:"Romero",
    pelo:"negro"
};
let objeto_string = JSON.stringify(mi_objeto);

console.log(mi_objeto);
console.log(objeto_string);

localStorage.setItem("persona", objeto_string);