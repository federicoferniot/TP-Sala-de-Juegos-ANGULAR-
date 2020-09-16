import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import { MatSnackBar } from '@angular/material/snack-bar';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.scss']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  juego: JuegoAdivina;
  Mensajes:string;
 
  constructor(private snackBar: MatSnackBar, private jugadorService: JugadorService) { 
    this.juego = new JuegoAdivina();
  }

  nuevoJuego(){
    this.juego.generarnumero();
  }

  verificar()
  {
    if (this.juego.verificar()){
      let puntosAOtorgar = Math.floor(100/this.juego.intentos);
      this.jugadorService.otorgarPuntosJugadorActual('adivina', puntosAOtorgar);
      this.snackBar.open(`Ganaste! Obtuviste ${puntosAOtorgar} puntos`, "X", {
        duration: 2000,
        panelClass: 'notif-success'
      });

    }else{
      this.snackBar.open("Incorrecto! Ayuda : "+this.juego.retornarAyuda(), "X", {
        duration: 2000,
        panelClass: 'notif-warn'
      });
    }
  }



  ngOnInit() {
  }

}
