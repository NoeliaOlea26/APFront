export class Proyecto{
    id?: number;
    nombre: string;
    anio: string;
    descripcion: string;
    link: string;
    captura: string;

    constructor(nombre: string,anio: string,descripcion: string,link: string, captura: string) {
        this.nombre = nombre;
        this.anio =anio;
        this.descripcion = descripcion;
        this.link = link;
        this.captura = captura;
    }
}