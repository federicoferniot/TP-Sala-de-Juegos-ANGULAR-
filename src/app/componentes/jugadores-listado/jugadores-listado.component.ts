import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PerfilJugador } from 'app/clases/perfil-jugador';
import { JugadorService } from 'app/servicios/jugador.service';
import { PerfilJugadorDialogComponent } from '../perfil-jugador-dialog/perfil-jugador-dialog.component';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.scss']
})

export class JugadoresListadoComponent implements OnInit {

  dataSource;
  nombre;
  apellido;
  correo;
  jugadores: PerfilJugador[];
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'accion'];
  cargando;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private jugadoresService: JugadorService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
    this.cargando = true;
    this.jugadoresService.obtenerJugadores().subscribe(response => {
      this.jugadores = [];
      response.forEach(el => {
        this.jugadores.push(<PerfilJugador>el.data());
      });
      this.dataSource = new MatTableDataSource(this.jugadores);
      this.dataSource.sort = this.sort;
      this.cargando = false;
    })
  }

  configurarFiltro(column){
    this.dataSource.filterPredicate = (data: PerfilJugador, filter: string) => {
      let retorno = false;
      switch (column) {
        case 'nombre':
          this.apellido = "";
          this.correo = "";
          retorno = data.nombre.toLowerCase().includes(filter.toLowerCase());
          break;
        case 'apellido':
          this.nombre = "";
          this.correo = "";
          retorno = data.apellido.toLowerCase().includes(filter.toLowerCase());
          break;
        case 'correo':
          this.nombre = "";
          this.apellido = "";
          retorno = data.correo.toLowerCase().includes(filter.toLowerCase());
          break;
      }
      return retorno;
    }
  }

  openDialog(jugador){
    const dialogRef = this.dialog.open(PerfilJugadorDialogComponent, {
      panelClass: 'app-perfil',
      data: jugador
    })

    dialogRef.afterClosed().subscribe( result => {
      console.log(result);
    })
  }

  public aplicarFiltro(valor: string){
    this.dataSource.filter = valor;
  }
}