function modificar_mensaje(mostrar:boolean){
     return function info(taget:object,propertyKey:string, descriptor:any){
        if(mostrar){
        console.log(taget);
        console.log(propertyKey);
        console.log(descriptor);
        }else{
            descriptor.value = function(){
                console.log("Metodo bloqueado!!!")
            }
        }
    }


}

function mi_propiedad(target:object,propertyKey:string){
    console.log("Estqa propiedad esta en la clase" + target.constructor.name + "y la propiedad se llama" + propertyKey);
}

class ordenador{

    @mi_propiedad marca:string = "Asus";

    @modificar_mensaje(true)
    encender(mensaje:string){
        console.log("Encendiendo...");
        console.log(mensaje);

    }
}
let pc = new ordenador();
pc.encender("Iniciando sesion en el PC de Diego");