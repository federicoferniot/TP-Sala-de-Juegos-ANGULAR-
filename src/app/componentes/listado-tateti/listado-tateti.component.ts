import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'app/clases/puntaje';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-tateti',
  templateUrl: './listado-tateti.component.html',
  styleUrls: ['./listado-tateti.component.css']
})
export class ListadoTatetiComponent implements OnInit {

  private _jugadores;
  private _tateti: Puntaje[];
  public cantidad = 0;
  public cargandoTateti = true;
  public puntajesTateti;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('tateti').get().subscribe( response => {
        this._tateti = [];
        response.forEach( element => {
          this._tateti.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
          this.cantidad++;
        });
        this.puntajesTateti = new MatTableDataSource(this._tateti);
        this.puntajesTateti.sort = this.sort;
        this.cargandoTateti = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
