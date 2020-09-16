import { Juego } from './juego';

export class Tateti extends Juego {
    public tablero = [['', '', ''], ['', '', ''], ['', '', '']];
    public jugadorActual;
    private puntajes = {
        'X': -10,
        'O': 10,
        'empate': 0
    }
    public ia = 'O';
    public humano = 'X';
    public enJuego;

    constructor(){
        super("Ta Te Ti");
    }

    public nuevoJuego(){
        this.tablero = [['', '', ''], ['', '', ''], ['', '', '']];
        this.enJuego = true;
        let random = Math.floor(Math.random()*2);
        if(random ==0){
            this.jugadorActual = this.humano;
        }
        else{
            this.avanzar();
        }
    }

    get ganador(){
        let winner = this.verificarGanador(this.tablero);
        if(winner != null){
            this.enJuego = false;
        }
        return winner;
    }

    public verificar(): boolean {
        throw new Error('Method not implemented.');
    }

    private probability(n) {
        return !!n && Math.random() <= n;
    }

    private verificarGanador(tablero) {
        let ganador = null;

        for (let i = 0; i < 3; i++) {
            if (this.igual(tablero[i][0], tablero[i][1], tablero[i][2])) {
                ganador = tablero[i][0];
            }
        }

        for (let i = 0; i < 3; i++) {
            if (this.igual(tablero[0][i], tablero[1][i], tablero[2][i])) {
                ganador = tablero[0][i];
            }
        }

        if (this.igual(tablero[0][0], tablero[1][1], tablero[2][2])) {
            ganador = tablero[0][0];
        }

        if (this.igual(tablero[2][0], tablero[1][1], tablero[0][2])) {
            ganador = tablero[2][0];
        }

        let openSpots = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tablero[i][j] == '') {
                    openSpots++;
                }
            }
        }

        if (ganador == null && openSpots == 0) {
            return 'empate';
        }
        else {
            return ganador;
        }
    }

    private copiarArray(tablero) {
        let tableroCopia = [['', '', ''], ['', '', ''], ['', '', '']];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                tableroCopia[i][j] = tablero[i][j];
            }
        }
        return tableroCopia;
    }

    public seleccionaHumano(fila, col){
        this.tablero[fila][col] = this.humano;
    }

    public avanzar() {
        let tableroCopia = this.copiarArray(this.tablero);
        let movimientoIa
        if(this.probability(0.90)){
            movimientoIa = this.mejorMovimiento(tableroCopia);
        }
        else{
            movimientoIa = this.movimientoRandom(tableroCopia);
        }
        this.tablero[movimientoIa.i][movimientoIa.j] = this.ia;
        this.ganador;
    }

    private igual(a, b, c): boolean {
        return (a == b && b == c && a != '')
    }

    private movimientoRandom(tablero){
        for(let i = 0; i<3; i++){
            for(let j = 0; j<3; j++){
                if(tablero[i][j] == ''){
                    return { i, j};
                }
            }
        }
    }

    private mejorMovimiento(tablero) {
        let mejorPuntaje = -Infinity;
        let movimiento;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tablero[i][j] == '') {
                    tablero[i][j] = this.ia;
                    let puntaje = this.minimax(tablero, 0, false);
                    tablero[i][j] = '';
                    if (puntaje > mejorPuntaje) {
                        mejorPuntaje = puntaje;
                        movimiento = { i, j };
                    }
                }
            }
        }
        tablero[movimiento.i][movimiento.j] = this.ia;
        this.jugadorActual = this.humano;
        return movimiento;
    }

    private minimax(tablero, profundidad, estaMaximizando) {
        let resultado = this.verificarGanador(tablero);
        if (resultado != null) {
            return this.puntajes[resultado];
        }

        if (estaMaximizando) {
            let mejorPuntaje = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (tablero[i][j] == '') {
                        tablero[i][j] = this.ia;
                        let puntaje = this.minimax(tablero, profundidad + 1, false);
                        tablero[i][j] = '';
                        mejorPuntaje = Math.max(puntaje, mejorPuntaje);
                    }
                }
            }
            return mejorPuntaje;
        }
        else {
            let mejorPuntaje = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (tablero[i][j] == '') {
                        tablero[i][j] = this.humano;
                        let puntaje = this.minimax(tablero, profundidad + 1, true);
                        tablero[i][j] = '';
                        mejorPuntaje = Math.min(puntaje, mejorPuntaje);
                    }
                }
            }
            return mejorPuntaje;
        }
    }

    public retornarInformacion(): string {
        return "Eres las X, haz una linea de 3 y gana!";
    }
}
