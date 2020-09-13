export class Carta {
    public estaGirada;
    public encontrada;
    public contenido;

    constructor(contenido){
        this.contenido = contenido;
        this.estaGirada = false;
        this.encontrada = false;
    }
}
