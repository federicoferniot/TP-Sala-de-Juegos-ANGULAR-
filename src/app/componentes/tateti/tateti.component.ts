import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tateti } from 'app/clases/tateti';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  public juego;

  constructor(private snackBar: MatSnackBar, private jugadorService: JugadorService) { 
    this.juego = new Tateti();
  }

  nuevoJuego(){
    this.juego.nuevoJuego();
  }

  seleccionar(fila, col){
    this.juego.seleccionaHumano(fila, col);
    if(this.juego.ganador == null){
      this.juego.avanzar(fila, col);
    }
    if(this.juego.ganador == this.juego.humano){
      let puntosAOtorgar = 50;
      this.snackBar.open(`Ganaste! Obtuviste ${puntosAOtorgar} puntos`, "X", {
        duration: 2000,
        panelClass: 'notif-success'
      });
      this.jugadorService.otorgarPuntosJugadorActual('tateti', puntosAOtorgar);
    }
    if(this.juego.ganador == this.juego.ia){
      this.snackBar.open("Perdiste! :(", "X", {
        duration: 2000,
        panelClass: 'notif-warn'
      });
    }
    if(this.juego.ganador == 'empate'){
      this.snackBar.open("Empate!", "X", {
        duration: 2000,
        panelClass: 'notif-warn'
      });
    }

  }

  ngOnInit(): void {
  }

}
