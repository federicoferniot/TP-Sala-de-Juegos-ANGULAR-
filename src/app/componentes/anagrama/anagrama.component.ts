import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JuegoAnagrama } from 'app/clases/juego-anagrama';
import { DatosService } from 'app/servicios/datos.service';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {
  public juego;
  public cargando;

  constructor(private datosService: DatosService, private snackBar: MatSnackBar, private jugadorService: JugadorService) { 
    this.juego = new JuegoAnagrama();
  }

  nuevoJuego(){
    this.juego.nuevoJuego();
  }

  adivinar(){
    if(this.juego.verificar()){
      let puntosAOtorgar = Math.floor(100/(3-this.juego.intentos));
      this.snackBar.open(`Ganaste! Obtuviste ${puntosAOtorgar} puntos`, "X", {
        duration: 2000,
        panelClass: 'notif-success'
      });
      this.jugadorService.otorgarPuntosJugadorActual('anagrama', puntosAOtorgar);
    }
    else{
      if(this.juego.enJuego){
        this.snackBar.open(`Incorrecto! Te quedan ${this.juego.intentos} intentos`, "X", {
          duration: 2000,
          panelClass: 'notif-warn'
        });
      }
      else{
        this.snackBar.open("Perdiste! :(", "X", {
          duration: 2000,
          panelClass: 'notif-warn'
        });
      }
    }
  }

  borrar(){
    this.juego.borrarPalabra();
  }

  ngOnInit() {
    this.cargando = true;
    this.datosService.obtenerPalabras().subscribe( response => {
      this.juego.palabras = response.data().palabras;
      this.cargando = false;
    });
  }

  seleccionar(letra){
    this.juego.seleccionarLetra(letra);
  }

  deseleccionar(letra){
    this.juego.deseleccionarLetra(letra);
  }

}
