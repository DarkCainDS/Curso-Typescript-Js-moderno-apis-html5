let productos = [
    {
        nombre:"Computador Gaming",
        marca:"ASUS",
        precio: 1000000
    }, 
    {
        nombre:"tablet",
        marca:"SAMSUNG",
        precio: 300000
    },
    {
        nombre:"celular xiaomi note 10",
        marca:"ASUS",
        precio: 499000
    }
];

function conseguirProductos(){

    return new Promise((resolve,reject) => {
        console.log("Cargando...");

        setTimeout(() => {
           resolve (productos);
           //reject(Error("Ha ocurrido un Error!!!"))
        }, 3500);
    });
}
async function misProductos(){
    try{
            let mis_productos = await conseguirProductos();
console.log(mis_productos);
    }catch(error){
        console.log(error.message);

    }
    console.log("Fuera del try")

}

misProductos();