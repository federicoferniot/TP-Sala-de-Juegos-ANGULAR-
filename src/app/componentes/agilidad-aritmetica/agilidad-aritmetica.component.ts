import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import { MatSnackBar } from "@angular/material/snack-bar";
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.scss']
})
export class AgilidadAritmeticaComponent implements OnInit {
  public progressValue;
  @Output() 
  emitirJuego :EventEmitter<any>= new EventEmitter<any>();
  juego : JuegoAgilidad;
  numeroUno;
  estaJugando: boolean;
  tiempo: number;
  repetidor:any;
  nombre = "Agilidad";
  ngOnInit() {
  }
   constructor(private snackBar: MatSnackBar, private jugadorService: JugadorService) {
     this.progressValue = 100;
     this.estaJugando=false;
     this.tiempo=10; 
     this.juego = new JuegoAgilidad();
  }

  nuevoJuego() {
    this.estaJugando=true;
    this.juego.nuevoJuego();
    this.repetidor = setInterval(()=>{ 
      
      this.tiempo = Math.round((this.tiempo-0.1)*10)/10;
      this.progressValue = this.tiempo*10;
      if(this.tiempo==0.0 ) {
        this.verificar();
      }
    }, 100);

  }
  verificar()
  {
    this.estaJugando=false;
    clearInterval(this.repetidor);
    this.juego.terminarJuego();
    let puntosAOtorgar = Math.floor(this.tiempo*10);
    if(this.juego.gano){
      this.snackBar.open("Ganaste!", "X", {
        duration: 2000,
        panelClass: 'notif-success'
      });
      this.jugadorService.otorgarPuntosJugadorActual('agilidad', puntosAOtorgar);
    }
    else{
      this.snackBar.open("Perdiste!", "X", {
        duration: 2000,
        panelClass: 'notif-warn'
      });
    }
    this.progressValue=100;
    this.tiempo=10;
  }
  
  ngOnDestroy(): void{
    clearInterval(this.repetidor);
  }
}
