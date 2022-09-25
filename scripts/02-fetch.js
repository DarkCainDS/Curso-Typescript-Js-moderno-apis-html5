//peticion ajax moderna

fetch('https://api.blockchain.com/v3/exchange')
.then(response => response.json())
.then(datos => {
    console.log(datos)
    mostrar(datos);
})
.catch(error => console.log(error.message))
;

//DOM
function mostrar(elemento){
    let contenedor = document.querySelector("#contenedor");
    elemento.forEach(element => {
        let muestrame = `
        <article>
        <h2>${element.title}</h2>
        <p>${element.body}</p>
        <article>
        <hr/>
        `;
        contenedor.innerHTML += muestrame
    });
    return elemento;
}