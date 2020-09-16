import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {
  public juego = "Juegos";

  constructor() { }

  ngOnInit() {
  }

  componentAdded(event){
    this.juego = event.juego;
  }

  componentDestroyed(event){
    this.juego = null;
  }
}
