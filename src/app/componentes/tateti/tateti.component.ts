import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tateti } from 'app/clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  public juego;

  constructor(private snackBar: MatSnackBar) { 
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
      this.snackBar.open("Ganaste!", "X", {
        duration: 2000,
        panelClass: 'notif-success'
      });
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
