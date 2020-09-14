import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JuegoMemoria } from 'app/clases/juego-memoria';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {

  public juego: JuegoMemoria;
  public contador;
  public tiempoRestante;

  constructor(private snackBar: MatSnackBar) {
    this.juego = new JuegoMemoria();
    this.juego.enJuego = false;
  }

  accion(indice) {
    if (!this.juego.pensando) {
      this.juego.seSelecciona(indice);
    }

  }

  nuevoJuego() {
    this.juego.nuevoJuego();
    this.tiempoRestante = 60;
    this.contador = setInterval(() => {
      this.tiempoRestante -= 1;
      console.log(this.tiempoRestante);
      if (this.juego.gano) {
        clearInterval(this.contador);
        this.snackBar.open("Ganaste!", "X", {
          duration: 2000,
          panelClass: 'notif-success'
        });
      }
      if (this.tiempoRestante == 0 && !this.juego.gano) {
        clearInterval(this.contador);
        this.juego.enJuego = false;
        this.snackBar.open("Perdiste!", "X", {
          duration: 2000,
          panelClass: 'notif-warn'
        });
      }
    }, 1000)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    clearInterval(this.contador);
  }

}
