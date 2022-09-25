//uso normal

function saludo(nombre:string):string{
    return `un saludo para ${nombre}`;
}
console.log(saludo("Diego Romero"));

//nada void
function mostrarFecha():void{
    console.log( `23-03-2022`);
}
mostrarFecha();

//  never  /fin de la aplicaccion 

function finApp():never{
    throw new Error("la aplicaccion se ha cerrado...");
}
//finApp();
function mostrarPais(pais:string,continente?:string):string{
    let resultado:string = "Faltan Datos"
    
    if(pais && continente){
        resultado = pais + " " + continente;
    }
    return resultado;

}
console.log(mostrarPais("Chile","Sur America"));


//tipo funcion
let grupos:(datos:string[]) => string;

grupos = function (datos:string[]){
    return "mis grupos favoritos son" + " " + datos.toString();
}
console.log(grupos(["motorhead", "la renga", "metallica"]));

//tipo literal
//Atuendo:"especial"|1|2|3|4)
//tipo personalizado o alias
type traje = "especial"|1|2|3|4 | "comprado";

function tekken(personaje:string, Atuendo: traje):string{
    return `El personaje es ${personaje} y lleva el atuendo ${Atuendo}`;

}
console.log(tekken("paul", "comprado"));