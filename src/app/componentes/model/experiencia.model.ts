export class Experiencia{
    id?: number;
    empresa: string;
    puesto: string;
    inicio: string;
    fin: string;
    descripcionAct: string;
    logo: string;

    constructor(empresa: string,puesto: string,inicio: string,fin: string,descripcionAct: string, logo: string) {
        this.empresa = empresa;
        this.puesto =puesto;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcionAct = descripcionAct;
        this.logo = logo;
    }
}