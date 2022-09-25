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

function productosComprado(nombre){
    return new Promise((resolve,reject)=> {
        console.log("Haciendo la Compra...")

        setTimeout(() => {
            resolve ({
                producto: nombre,
                cliente: "Diego Romero"
            });
            //reject(Error("Ha ocurrido un Error!!!"))
         }, 1000);
    });
}

function procesarVenta(venta){
    console.log("producto comprado:",venta);
    productos = productos.filter(producto => {
        return producto.nombre != venta.producto
        });
        return productos;
}


conseguirProductos()
.then( items=> {
    console.log("Productos Disponibles",items);
    return productosComprado("Computador Gaming");
})
.then(venta =>{
    procesarVenta(venta);
    return productosComprado("tablet");
})
.then(venta => {
    procesarVenta(venta);
    return productosComprado("celular xiaomi note 10")
})
.then(venta => {
    procesarVenta(venta);
})
.catch(error => console.error(error.message))
.finally(()=> {
    if(productos.length >= 1){
        console.log("Productos que quedan disponibles:", productos);
    }else{
        console.log("No quedan productos disponibles");
    }
    console.log("Promesa Finalizada")
    
})
;