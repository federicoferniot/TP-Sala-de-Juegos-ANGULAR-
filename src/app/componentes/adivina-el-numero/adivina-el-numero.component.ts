import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.scss']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  juego: JuegoAdivina;
  Mensajes:string;
  contador:number;
 
  constructor(private snackBar: MatSnackBar) { 
    this.juego = new JuegoAdivina();
  }

  nuevoJuego(){
    this.juego.generarnumero();
  }

  verificar()
  {
    this.contador++;
    if (this.juego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.snackBar.open("Sos un Genio!!!", "X", {
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
