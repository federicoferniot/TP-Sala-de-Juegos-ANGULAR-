import { Juego } from './juego';
import { Letra } from './letra';

export class JuegoAnagrama extends Juego{
    private palabra;
    public palabraDesordenada=[];
    public palabras;
    public palabraIngresada = [];
    public intentos;
    public gano;
    public enJuego;

    constructor(){
        super("Anagrama");
    }

    nuevoJuego(){
        this.enJuego = true;
        this.intentos = 3;
        this.gano = false;
        this.palabraDesordenada = [];
        this.palabraIngresada = [];
        let indice = Math.floor(Math.random()*this.palabras.length);
        this.palabra = this.palabras[indice].toUpperCase();
        for(let i=0; i < this.palabra.length; i++){
            this.palabraDesordenada.push(new Letra(this.palabra[i]));
        }
        this.palabraDesordenada = shuffle(this.palabraDesordenada);
    }

    seleccionarLetra(indice){
        this.palabraDesordenada[indice].estaUsada = true;
        this.palabraIngresada.push(this.palabraDesordenada[indice]);
    }

    deseleccionarLetra(indice){
        this.palabraIngresada[indice].estaUsada = false;
        this.palabraIngresada.splice(indice, 1);
    }

    borrarPalabra(){
        for(let i = 0; i<this.palabraDesordenada.length; i++){
            this.palabraDesordenada[i].estaUsada = false;
        }
        this.palabraIngresada = [];
    }

    public retornarInformacion(): string {
        return "Adivina la palabra desordenada y suma puntos!";
    }
    public verificar(): boolean {
        let palabra = "";
        let retorno = false;
        this.intentos -= 1;
        for(let i = 0; i<this.palabraIngresada.length; i++){
            palabra += this.palabraIngresada[i].letra;
        }
        if(palabra == this.palabra){
            retorno = true;
            this.gano = true;
            this.enJuego = false;
        }
        else{
            if(this.intentos == 0){
                this.enJuego = false;
            }
        }
        return retorno;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
