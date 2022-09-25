/*
class coche{
    marca:string;
    modelo:string;
    year:number ;
    color:string ;
    arrancado:boolean  ;
    velocidad:number  ;

    constructor(marca:string,modelo:string,year:number,color:string){
        this.marca = marca;
        this.modelo = modelo;
        this.year  =year;
        this.color = color;
        this.arrancado = false;
        this.velocidad = 0;
    }

    public arrancar(){
        this.arrancado= true;
    }
    apagar():void{
        this.arrancado=false;
    }
    set dar_color(color:string){
        this.color = color;
    }
    public get getColor():string{
        return this.color;
    }
    static saludar():string{
        return "Hola que tal";
    }
}

let mi_coche = new coche("renault","clio",2013,"Azul");
//mi_coche.arrancar();

mi_coche.dar_color ="Rojo";

console.log(mi_coche);*/
class coche{
    public prueba:string;
    
    constructor(
    public marca:string,
    public modelo:string,
    public year:number,
    protected color:string,
    public arrancado:boolean =false,
    public velocidad:number =0
){
    this.prueba = "Diego Romero"
}
    public arrancar(){
        console.log("CLase padre");
        this.velocidad =235;
        this.arrancado= true;
        console.log(this);
    }

}

class Camioneta extends coche{
    constructor(
        public marca:string,
        public modelo:string,
        public year:number,
        protected color:string,
        public arrancado:boolean =false,
        public velocidad:number =0
    ){
        super(marca,modelo,year,color);
    }

    public arrancar(){
        console.log("CLase hija");
        this.velocidad =200;
        this.arrancado= true;
        console.log(this);
    }

    public mostrar(){
        super.arrancar();
        return this.arrancado;
    }

}
let micamioneta = new Camioneta ("chevrolet","nose",2023,"Azul");

console.log(micamioneta.mostrar());