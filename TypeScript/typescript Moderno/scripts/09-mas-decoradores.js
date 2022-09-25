"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function modificar_mensaje(mostrar) {
    return function info(taget, propertyKey, descriptor) {
        if (mostrar) {
            console.log(taget);
            console.log(propertyKey);
            console.log(descriptor);
        }
        else {
            descriptor.value = function () {
                console.log("Metodo bloqueado!!!");
            };
        }
    };
}
function mi_propiedad(target, propertyKey) {
    console.log("Estqa propiedad esta en la clase" + target.constructor.name + "y la propiedad se llama" + propertyKey);
}
class ordenador {
    constructor() {
        this.marca = "Asus";
    }
    encender(mensaje) {
        console.log("Encendiendo...");
        console.log(mensaje);
    }
}
__decorate([
    mi_propiedad,
    __metadata("design:type", String)
], ordenador.prototype, "marca", void 0);
__decorate([
    modificar_mensaje(true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ordenador.prototype, "encender", null);
let pc = new ordenador();
pc.encender("Iniciando sesion en el PC de Diego");
