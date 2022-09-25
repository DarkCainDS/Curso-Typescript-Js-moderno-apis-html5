//guardar datos en el navegador

sessionStorage.setItem("nombre" , "Diego Romero");
sessionStorage.setItem("apellido", "Romero");

//sacar datos
alert(sessionStorage.getItem("apellido"));