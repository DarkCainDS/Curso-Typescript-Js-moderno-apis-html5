const hortalizas = document.querySelectorAll("#cesta > div");
const huerto = document.querySelector("#huerto");
const cesta = document.querySelector("#cesta");
hortalizas.forEach((hortalizas,indice )=> {
    //asignar id a elementos
    hortalizas.setAttribute("id","hortalizas" + indice);
    //dragStart--drag--dragend
    hortalizas.addEventListener("dragstart", (e) => {
        console.log("Estas moviendo el tomate " + parseInt(indice+1))
        //compartir info del elemento que muevo
        console.log(e.target);
        e.dataTransfer.setData("text", e.target.id);
    })

});

// DRAGENTER -- DRAGOVER -- DROP -- DRAGLEAVE (MINUS)
huerto.addEventListener("dragover", (e) =>{
    e.preventDefault();
   // console.log("Tomate moviendose!!!");
})

huerto.addEventListener("drop", (e) =>{
    e.preventDefault();
    console.log("Tomate plantado!!!");

    //recibir la info y soltar el elemento en la zona
    let hortalizas = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#"+hortalizas));
    console.log("Has plantado el tomate:" +hortalizas)
})

/*huerto.addEventListener("dragleave", (e) =>{
    e.preventDefault();
    console.log("Tomate recogido!!!");
})*/

cesta.addEventListener("dragover", (e) =>{
    e.preventDefault();
   // console.log("Tomate moviendose!!!");
})

cesta.addEventListener("drop", (e) =>{
    e.preventDefault();
    console.log("Tomate plantado!!!");

    //recibir la info y soltar el elemento en la zona
    let hortalizas = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#"+hortalizas));
    console.log("Has recogido la hortaliza:" +hortalizas)
})
