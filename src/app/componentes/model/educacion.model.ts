export class Educacion{
    id?: number;
    escuela: string;
    titulo: string;
    inicio: string;
    fin: string;
    logo: string;

    constructor(escuela: string,titulo: string,inicio: string,fin: string, logo: string) {
        this.escuela = escuela;
        this.titulo =titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.logo = logo;
    }
}