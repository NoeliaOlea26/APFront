export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    cargo: string;
    descrip: string;
    foto: string;

    constructor(nombre: string,apellido: string,cargo: string,descrip: string,foto: string){
        this.nombre = nombre;
        this.apellido =apellido;
        this.cargo = cargo;
        this.descrip = descrip;
        this.foto = foto;
    }
}