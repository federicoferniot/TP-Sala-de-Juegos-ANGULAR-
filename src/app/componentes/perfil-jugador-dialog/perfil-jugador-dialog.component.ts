import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerfilJugador } from 'app/clases/perfil-jugador';

@Component({
  selector: 'app-perfil-jugador-dialog',
  templateUrl: './perfil-jugador-dialog.component.html',
  styleUrls: ['./perfil-jugador-dialog.component.css']
})
export class PerfilJugadorDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PerfilJugadorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PerfilJugador) { }

  ngOnInit(): void {
  }

}
