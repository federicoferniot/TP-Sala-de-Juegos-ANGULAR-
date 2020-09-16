import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'app/clases/puntaje';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-anagrama',
  templateUrl: './listado-anagrama.component.html',
  styleUrls: ['./listado-anagrama.component.css']
})
export class ListadoAnagramaComponent implements OnInit {

  private _jugadores;
  private _anagrama: Puntaje[];
  public cantidad = 0;
  public cargandoAnagrama = true;
  public puntajesAnagrama;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      this.cargandoAnagrama = true;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('anagrama').get().subscribe( response => {
        response.forEach( element => {
          this._anagrama = [];
          this._anagrama.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
          this.cantidad++;
        });
        this.puntajesAnagrama = new MatTableDataSource(this._anagrama);
        this.puntajesAnagrama.sort = this.sort;
        this.cargandoAnagrama = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
