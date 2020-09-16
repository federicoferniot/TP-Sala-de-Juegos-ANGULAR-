import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JuegoPiedraPapelTijera } from 'app/clases/juego-piedra-papel-tijera';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  public juego: JuegoPiedraPapelTijera;

  constructor(private snackBar: MatSnackBar, private jugadorService: JugadorService) { 
    this.juego = new JuegoPiedraPapelTijera();
  }

  nuevoJuego(){
    this.juego.nuevoJuego();
  }

  ngOnInit(): void {
  }

  seleccionar(elemento){
    this.juego.elementoSeleccionado = elemento;
    let resultado = this.juego.verificar();
    if(resultado == null){
      this.snackBar.open("Empate!", "X", {
        duration: 2000,
        panelClass: 'notif-warn'
      });
    }
    else{
      if(resultado){
        let puntosAOtorgar = 10;
        this.snackBar.open(`Ganaste! Obtuviste ${puntosAOtorgar} puntos`, "X", {
          duration: 2000,
          panelClass: 'notif-success'
        });
        this.jugadorService.otorgarPuntosJugadorActual('ppt', puntosAOtorgar);
      }
      else{
        this.snackBar.open("Perdiste!", "X", {
          duration: 2000,
          panelClass: 'notif-warn'
        });
      }
    }
  }

}
