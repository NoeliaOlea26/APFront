export class Skill{
    id?: number;
    titulo: string;
    porcentaje: number;
    color: string;
    fontsize: string;
    outSC: string;
    innSC: string;

    constructor(titulo: string,porcentaje: number,color: string,fontsize: string, outSC: string , innSC: string) {
        this.titulo = titulo;
        this.porcentaje =porcentaje;
        this.color = color;
        this.fontsize = fontsize;
        this.outSC = outSC;
        this.innSC = innSC;
    }
}
