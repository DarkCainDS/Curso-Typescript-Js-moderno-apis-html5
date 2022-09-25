//objeto ts

type empresas = {
    nombre:string,
    sector:string,
    servicio:string[],
    facturacion:number ,
    mostrar:()=> string
}

let empresa:empresas = {
    nombre:"Microsoft",
    sector:"informatica",
    servicio:["systmeas operativos","ofimatica","consolas"],
    facturacion: 55_000_000,
    mostrar(){
        return this.nombre + " " + this.sector
    }
};

console.log(empresa.mostrar());
console.log(empresa);