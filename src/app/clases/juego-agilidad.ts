import { Juego } from './juego';

export class JuegoAgilidad extends Juego{
    public numeroIngresado: number;
    public numeroUno: number;
    public numeroDos: number;
    public resultado: number;
    public operador: string;
    public gano: boolean;
    private operadores = [ '+' , '-', 'x']
    private min = 0;
    private max = 100;

    nuevoJuego(){
        this.numeroUno = this.numeroRandom(this.min, this.max);
        this.numeroDos = this.numeroRandom(this.min, this.max);
        this.operador = this.operadorRandom();
        this.gano = false;
        switch (this.operador) {
            case '+':
                this.resultado = this.numeroUno + this.numeroDos;
                break;
            case '-':
                this.resultado = this.numeroUno - this.numeroDos;
                break;
            case 'x':
                this.resultado = this.numeroUno * this.numeroDos;
                break;
            default:
                break;
        }
    }

    terminarJuego(){
        if(this.verificar()){
            this.gano = true;
        }
    }

    verificar():boolean{
        return this.resultado == this.numeroIngresado
    }

    private numeroRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) - min);
    }

    private operadorRandom(): string {
        return this.operadores[this.numeroRandom(0, this.operadores.length)];
    }
}
