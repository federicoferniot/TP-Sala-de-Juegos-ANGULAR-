import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JuegoBatalla } from 'app/clases/juego-batalla';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-batalla-naval',
  templateUrl: './batalla-naval.component.html',
  styleUrls: ['./batalla-naval.component.css']
})
export class BatallaNavalComponent implements OnInit {
  public juego: JuegoBatalla;
  public mensaje;
  public enJuego = true;
  private puntosBase = 100;

  constructor(private snackBar: MatSnackBar, private jugadorService: JugadorService) { 
    this.juego = new JuegoBatalla();
    this.juego.nuevoJuego();
  }

  ngOnInit(): void {
  }

  nuevoJuego(){
    this.enJuego = true;
    this.juego.nuevoJuego();
    this.mensaje = null;
  }

  atacar(indice){
    if(!this.juego.grilla[indice].atacado && this.enJuego){
      if(this.juego.atacar(indice)){
        this.mensaje = "¡Hemos dado en el blanco!"
      }
      else{
        this.mensaje = "¡Dió en el agua!"
      }
      if(this.juego.misiles.length == 0 && !this.juego.estanHundidos()){
        this.enJuego = false;
        this.mensaje = "¡Hemos sido derrotados!"
      }
      else if(this.juego.estanHundidos()){
        this.enJuego = false;
        this.mensaje = "Hemos derrotado al enemigo. ¡Felicitaciones!";
        let puntosAOtorgar = this.puntosBase - ((6-this.juego.misiles.length)*10);
        this.snackBar.open(`Ganaste! Obtuviste ${puntosAOtorgar} puntos`, "X", {
          duration: 2000,
          panelClass: 'notif-success'
        });
        this.jugadorService.otorgarPuntosJugadorActual('batalla', puntosAOtorgar);
      }
    }
  }
}
