
//comprobar compatibilidad
if(Notification == "undefined"){
    console.log("Tu navegador noes compatible con las notificaiones");
}else{
    console.log("Es compatible", Notification);

    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }
    console.log(Notification.permission);

    let principal = "hola soy una notificacion";
    let opciones = {
        body: "Cuerpo de la notificaciones",
        icon: "https://www.kindpng.com/picc/m/230-2304538_compilation-of-final-fantasy-vii-icons-final-fantasy.png"
    };

  

    const notificacion = new Notification (principal,opciones);

        notificacion.onclick= (event) => {
            event.preventDefault();
            window.open("https://www.google.cl/")
        }
    //Tiempo de expiracion
    setTimeout(() => {
        notificacion.close()
    }, 5000);
  notificacion.onclose = () => {
        alert("Las noticias son importantes");
    };


}