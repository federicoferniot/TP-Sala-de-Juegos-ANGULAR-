import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'app/clases/puntaje';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-adivina',
  templateUrl: './listado-adivina.component.html',
  styleUrls: ['./listado-adivina.component.css']
})
export class ListadoAdivinaComponent implements OnInit {

  private _jugadores;
  private _adivina: Puntaje[];
  public cantidad = 0;
  public cargandoAdivina = true;
  public puntajesAdivina;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      this.cargandoAdivina = true;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('adivina').get().subscribe( response => {
        this._adivina = [];
        response.forEach( element => {
          this._adivina.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
          this.cantidad++;
        });
        this.puntajesAdivina = new MatTableDataSource(this._adivina);
        this.puntajesAdivina.sort = this.sort;
        this.cargandoAdivina = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
