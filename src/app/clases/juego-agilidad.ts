export class JuegoAgilidad {
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
        if(this.resultado == this.numeroIngresado){
            this.gano = true;
        }
    }

    private numeroRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) - min);
    }

    private operadorRandom(): string {
        return this.operadores[this.numeroRandom(0, this.operadores.length)];
    }
}
