import { Juego } from '../clases/juego'

export class JuegoAdivina extends Juego {
  numeroSecreto: number = 0;
  numeroIngresado;
  public enJuego;
  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super("Adivina el número", gano, jugador);

  }
  public verificar() {
    if (this.numeroIngresado == this.numeroSecreto) {
      this.gano = true;
      this.enJuego = false;
    }
    return this.gano;
  }
  public generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.info('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
    this.enJuego = true;
  }
  public retornarAyuda() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return "Falta";
    }
    return "Te pasaste";
  }
}
