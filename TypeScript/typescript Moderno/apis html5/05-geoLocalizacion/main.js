//COMPROBAR SI ESTA DISPONIBLE EN EL NAVEGADOR
if(navigator.geolocation){
    console.log("Disponible");
    //conseguir posicion
    navigator.geolocation.getCurrentPosition( 
        (position) => {
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            console.log(position);
    },
    error => {
        console.log("Hay un error en la geolocalizacion");
    }
    );
}