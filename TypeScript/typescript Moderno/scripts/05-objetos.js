"use strict";
//objeto ts
let empresa = {
    nombre: "Microsoft",
    sector: "informatica",
    servicio: ["systmeas operativos", "ofimatica", "consolas"],
    facturacion: 55000000,
    mostrar() {
        return this.nombre + " " + this.sector;
    }
};
console.log(empresa.mostrar());
console.log(empresa);
