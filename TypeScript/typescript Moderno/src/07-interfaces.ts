interface viedojuego{
    titulo:string;
    categoria:string;
    edad:number;
    duracion:number;
    lanzado?:boolean;
    mostrar():string;
    actualizacion(consola:string):string;
};

//clase 
class fifa implements viedojuego {
    constructor(
        public titulo:string,
        public categoria:string,
        public edad:any,
        public duracion:number,
        public lanzado?:boolean,
        public actualizacion?:string

    ){}

    mostrar():any{
        console.log(this.titulo,this.duracion,this.lanzado);
    }
    actualizar(consola:string){
        console.log("Buscando actualizacion...");
        return "Actualizado";
    }
}

let fifa23:fifa = new fifa("Fifa 23", "Todos", 12, 45, true);

console.log(fifa23);
let finalFantasy:viedojuego = {
    titulo: "Final Fantasy VII",
    categoria: "RPG",
    edad: 16  ,
    duracion: 45,
    lanzado: true

    mostrar():void{
        console.log(this.titulo,this.duracion,this.lanzado);
    },
    actualizacion(consola){
        console.log("Buscando actualizacion...");
        return "Actualizado";
    }
}

console.log(finalFantasy);