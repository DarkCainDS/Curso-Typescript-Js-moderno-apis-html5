let lista = document.querySelectorAll("#lista li");

lista.forEach(elemento => {
   let cont = elemento.dataset.continente;
   elemento.innerHTML += "|" + cont;

   if(cont === "Europa"){
       elemento.style.backgroundColor = "lightblue";
       elemento.style.color = "black";
   }
});