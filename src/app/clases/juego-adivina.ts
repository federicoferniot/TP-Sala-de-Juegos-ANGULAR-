import { Juego } from '../clases/juego'

export class JuegoAdivina extends Juego {
  numeroSecreto: number = 0;
  numeroIngresado;
  public enJuego;
  public intentos;
  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super("Adivina el número", gano, jugador);
  }

  public verificar() {
    this.intentos +=1;
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
    this.intentos = 0;
  }

  public retornarAyuda() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return "Falta";
    }
    return "Te pasaste";
  }

  public retornarInformacion(): string {
    return "Adivina el número y suma puntos dependiendo de los intentos usados.";
  }
}
