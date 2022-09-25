//comprobar si el navegador es compatible
//console.log(typeof(Storage));
/*if(typeof(Storage)!=="undefined"){
    window.location.href = ""
}*/
//Guardar datos en el navegador local
localStorage.setItem("nombre", "Diego");
localStorage.setItem("nombre1", "Dark");

//recuperar datos del almacenamiento local
let datos = document.querySelector("#datos");
datos.innerHTML = `<p  id="nombre">nombre 1: ${localStorage.getItem("nombre")}  <button>Borrar</button></p>`;
datos.innerHTML += `<p  id="nombre1">nombre 2:" ${localStorage.getItem("nombre1")} <button>Borrar</button></p>`;

//Borrar datos
//localStorage.removeItem("nombre");

let elementos = document.querySelectorAll("p button")

elementos.forEach(elemento => {

    elemento.addEventListener("click", (event) => {
        let padre = event.target.parentElement;

        localStorage.removeItem(padre.getAttribute("id"));
        padre.remove();

    });
});

document.querySelector("#all").addEventListener("click", (event) => {
    event.target.remove();
    localStorage.clear();
 
});

//Metodo para buttones y remover
document.querySelector("#nombre").addEventListener("click",() => {
    localStorage.removeItem("nombre");
    document.querySelector("#nombre").remove();
});
document.querySelector("#nombre1").addEventListener("click",() => {
    localStorage.removeItem("nombre1");
    document.querySelector("#nombre1").remove();
});
/*document.querySelector("#all").addEventListener("click" , () =>{
    localStorage.clear();
    document.querySelector("#nombre1").remove();
    document.querySelector("#nombre").remove();
});*/

//sacar objeto del localStorage
let persona = JSON.parse(localStorage.getItem("persona"));
datos.innerHTML += persona.apellido;