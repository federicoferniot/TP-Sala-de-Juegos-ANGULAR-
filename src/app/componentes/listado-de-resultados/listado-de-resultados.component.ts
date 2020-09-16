
import { Component, OnInit , Input, EventEmitter, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.scss']
})
export class ListadoDeResultadosComponent implements OnInit {

  public jugadores;
  public puntajesAgilidad;
  public puntajesPpt;
  public puntajesAdivina;
  public puntajesMemoria;
  public puntajesTateti;
  public puntajesAnagrama;
  public cargandoJugadores;
  public cargandoAgilidad;
  public cargandoPpt;
  public cargandoAdivina;
  public cargandoMemoria;
  public cargandoTateti;
  public cargandoAnagrama;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private jugadorService: JugadorService) {
  }

  ngOnInit() {
    this.cargandoJugadores = true;
    this.cargandoPpt = true;
    this.cargandoAdivina = true;
    this.cargandoAgilidad = true;
    this.cargandoMemoria = true;
    this.cargandoTateti = true;
    this.cargandoAnagrama = true;
    this.jugadorService.obtenerJugadores().subscribe( response => {
      this.jugadores = {};
      response.forEach(element => {
        this.jugadores[element.id] = {
          uid: element.id,
          jugador: element.data().nombre + " " + element.data().apellido
        };
      });
      this.cargandoJugadores = false;
    });
    this.puntajesAgilidad = [];
    let puntajes = this.jugadorService.obtenerResultado();
    puntajes.collection('agilidad').get().subscribe( response => {
      response.forEach( element => {
        this.puntajesAgilidad.push({
          uid: element.id,
          puntos: element.data().puntos
        });
      });
      this.cargandoAgilidad = false;
    });
    this.puntajesAdivina = [];
    puntajes.collection('adivina').get().subscribe( response => {
      response.forEach( element => {
        this.puntajesAdivina.push({
          uid: element.id,
          puntos: element.data().puntos
        });
      });
      this.cargandoAdivina = false;
    });
    this.puntajesPpt = [];
    puntajes.collection('ppt').get().subscribe( response => {
      response.forEach( element => {
        this.puntajesPpt.push({
          uid: element.id,
          puntos: element.data().puntos
        });
      });
      this.cargandoPpt = false;
    });
    this.puntajesMemoria = [];
    puntajes.collection('memoria').get().subscribe( response => {
      response.forEach( element => {
        this.puntajesMemoria.push({
          uid: element.id,
          puntos: element.data().puntos
        });
      });
      this.cargandoMemoria = false;
    });
    this.puntajesTateti = [];
    puntajes.collection('tateti').get().subscribe( response => {
      response.forEach( element => {
        this.puntajesTateti.push({
          uid: element.id,
          puntos: element.data().puntos
        });
      });
      this.cargandoTateti = false;
    });
    this.puntajesAnagrama = [];
    puntajes.collection('anagrama').get().subscribe( response => {
      response.forEach( element => {
        this.puntajesAnagrama.push({
          uid: element.id,
          puntos: element.data().puntos
        });
      });
      this.cargandoAnagrama = false;
    });
  }

  ver() {
  }

}

export interface Puntaje{
  uid: string,
  puntos: number
}