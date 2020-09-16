import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'app/clases/puntaje';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-memoria',
  templateUrl: './listado-memoria.component.html',
  styleUrls: ['./listado-memoria.component.css']
})
export class ListadoMemoriaComponent implements OnInit {

  private _jugadores;
  private _memoria: Puntaje[];
  public cantidad = 0;
  public cargandoMemoria = true;
  public puntajesMemoria;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      this.cargandoMemoria = true;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('memoria').get().subscribe( response => {
        this._memoria = [];
        response.forEach( element => {
          this._memoria.push(<Puntaje>{
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
          this.cantidad++;
        });
        this.puntajesMemoria = new MatTableDataSource(this._memoria);
        this.puntajesMemoria.sort = this.sort;
        this.cargandoMemoria = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
