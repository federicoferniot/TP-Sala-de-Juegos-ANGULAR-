import { CasilleroBatalla } from './casillero-batalla';
import { Juego } from './juego';

export class JuegoBatalla extends Juego{
    public grilla: CasilleroBatalla[] = [];
    private posibilidades = [0,1,2,3,4,5,6,7,8];
    private posicionBarcoUno;
    private posicionBarcoDos;
    public misiles: String[];

    constructor(){
        super('Batalla Naval');
    }

    public nuevoJuego(){
        this.grilla = [];
        this.setRandom();
        for (let i = 0; i < 9; i++) {
            this.grilla.push(new CasilleroBatalla());
        }
        this.grilla[this.posicionBarcoUno].hayBarco = true;
        this.grilla[this.posicionBarcoDos].hayBarco = true;
        this.misiles = ['','','','','',''];
    }

    private setRandom(){
        this.posibilidades = [0,1,2,3,4,5,6,7,8];
        this.posicionBarcoUno = this.posibilidades.splice(Math.floor(Math.random() * this.posibilidades.length),1);
        this.posicionBarcoDos = this.posibilidades.splice(Math.floor(Math.random() * this.posibilidades.length),1);
    }

    public atacar(indice){
        this.misiles.pop();
        this.grilla[indice].atacado = true;
        return this.grilla[indice].hayBarco;
    }

    public estanHundidos(){
        return (this.grilla[this.posicionBarcoUno].hayBarco && this.grilla[this.posicionBarcoUno].atacado
            && this.grilla[this.posicionBarcoDos].hayBarco && this.grilla[this.posicionBarcoDos].atacado);
    }

    public retornarInformacion(): string {
        return "Tienes seis intentos para hundir a dos barcos enemigos. Ganas al hundir ambos barcos. Puedes ganar un máximo de 80 puntos dependiendo de las chances usadas."
    }
    public verificar(): boolean {
        return true;
    }
}
