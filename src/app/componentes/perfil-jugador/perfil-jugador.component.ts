import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-jugador',
  templateUrl: './perfil-jugador.component.html',
  styleUrls: ['./perfil-jugador.component.css']
})
export class PerfilJugadorComponent implements OnInit {

  @Input() public jugador;

  constructor() { }

  ngOnInit(): void {
  }

}
