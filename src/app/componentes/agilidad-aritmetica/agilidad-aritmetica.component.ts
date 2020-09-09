import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.scss']
})
export class AgilidadAritmeticaComponent implements OnInit {
  public progressValue;
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  mostrarVerificar: boolean;
  mostrarProgressBar: boolean;
  tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
    this.progressValue = 100;
    this.mostrarVerificar=false;
    this.mostrarProgressBar=false;
    this.tiempo=10; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    this.mostrarVerificar=true;
    this.mostrarProgressBar=true;
    this.repetidor = setInterval(()=>{ 
      
      this.tiempo = Math.round((this.tiempo-0.1)*10)/10;
      this.progressValue = this.tiempo*10;
      console.log("llego", this.tiempo);
      if(this.tiempo==0.0 ) {
        clearInterval(this.repetidor);
        this.Verificar();
        this.mostrarVerificar=false;
        this.mostrarProgressBar=false;
        this.progressValue=100;
        this.tiempo=10;
      }
    }, 100);

  }
  Verificar()
  {
    this.mostrarVerificar=false;
    this.mostrarProgressBar=false;
    clearInterval(this.repetidor);
  }  
}
