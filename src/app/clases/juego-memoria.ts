import { Carta } from './carta';
import { Juego } from './juego';

export class JuegoMemoria extends Juego {
    public cartas = [];
    public primerOpcion;
    public segundaOpcion;
    public enJuego;
    public gano;
    public pensando;
    public movimientos;

    constructor() {
        super("Memo Test");
        this.nuevoJuego();
    }

    nuevoJuego(){
        let array= [];
        this.cartas = [];
        for(let i=0; i<35;i++){
            array.push(i+1);
        }
        array = shuffle(array);
        array = array.slice(0,9);
        for (let i = 0; i < 9; i++) {
            this.cartas.push(new Carta("/assets/imagenes/memoria/"+ array[i] +".png"));
            this.cartas.push(new Carta("/assets/imagenes/memoria/"+ array[i] +".png"));
        }
        this.cartas = shuffle(this.cartas);
        this.enJuego = true;
        this.gano = false;
        this.pensando = false;
        this.movimientos = 0;
        this.primerOpcion = null;
        this.segundaOpcion = null;
    }

    seSelecciona(indice) {
        this.girar(indice);
        this.pensando = true;
        delay(800).then(() => {
            if (this.primerOpcion == null) {
                this.primerOpcion = indice;
            }
            else {
                this.movimientos += 1;
                this.segundaOpcion = indice;
                if (this.sonIgualesSeleccionadas()) {
                    this.cartas[this.primerOpcion].encontrada = true;
                    this.cartas[this.segundaOpcion].encontrada = true;
                }
                else {
                    this.cartas[this.primerOpcion].estaGirada = false;
                    this.cartas[this.segundaOpcion].estaGirada = false;
                }
                if (this.todasEncontradas()) {
                    this.enJuego = false;
                    this.gano = true;
                }
                this.primerOpcion = null;
                this.segundaOpcion = null;
            }
            this.pensando = false;
        })

    }

    girar(indice) {
        this.cartas[indice].estaGirada = true;
    }

    todasEncontradas() {
        let retorno = true;
        this.cartas.forEach(element => {
            if (!element.encontrada) {
                retorno = false;
            }
        });
        return retorno;
    }

    sonIgualesSeleccionadas() {
        this.pensando = true;
        delay(1000).then(() => { })
        return this.cartas[this.primerOpcion].contenido == this.cartas[this.segundaOpcion].contenido;
    }

    public verificar(): boolean {
        return this.cartas[this.primerOpcion].contenido == this.cartas[this.segundaOpcion].contenido;
    }

    public retornarInformacion(): string {
        return "Encuentra los pares de cartas y suma puntos al encontrar todas!";
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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