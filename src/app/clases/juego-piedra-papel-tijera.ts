import { Juego } from './juego';

export class JuegoPiedraPapelTijera extends Juego{
    public elementoSeleccionado;
    public elementoMaquina;
    public gano;
    public estaJugando;
    public ronda;
    private repetidor;
    private opcionMaquina;
    private opciones = ['piedra', 'papel', 'tijera']

    public nuevoJuego(): void{
        this.elementoSeleccionado = null;
        this.elementoMaquina = null;
        this.opcionMaquina = 0;
        this.ronda = 0;
        this.estaJugando = true;
        this.repetidor = setInterval(()=>{
            this.opcionMaquina++;
            if(this.opcionMaquina==3){
                this.opcionMaquina=0;
            }
            console.log(this.opcionMaquina);
            this.elementoMaquina = this.opciones[this.opcionMaquina];
        }, 500)
    }

    public verificar(): boolean {
        clearInterval(this.repetidor);
        this.elementoMaquina = this.opciones[Math.floor(Math.random()*2)];
        this.estaJugando = false;
        let retorno = null;
        switch (this.elementoSeleccionado+this.elementoMaquina) {
            case 'piedrapapel':
            case 'papeltijera':
            case 'tijerapiedra':
                retorno = false;
                break;
            case 'papelpiedra':
            case 'tijerapapel':
            case 'piedratijera':
                retorno = true;
                break; 
            default:
                break;
        }
        return retorno;
    }
}
