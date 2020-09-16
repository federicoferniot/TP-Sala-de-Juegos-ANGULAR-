import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private db: AngularFirestore, private authService: AuthService) { }

  public nuevoJugador(uid, nombre, apellido, correo, imagen){
    this.db.collection('jugadores').doc(uid).set({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      avatar: imagen
    });
  }

  public obtenerJugadores(){
    return this.db.collection('jugadores').get();
  }

  public obtenerJugador(uid){
    return this.db.collection('jugadores').doc(uid).snapshotChanges();
  }

  public otorgarPuntosJugadorActual(juego, puntos){
    this.db.collection('puntajes').doc('puntos').collection(juego).doc(this.authService.userLoggedIn.uid).set({
      puntos: firebase.firestore.FieldValue.increment(puntos)
    }, {merge: true}).catch( error => console.log(error));
  }

  public obtenerResultados(){
    return this.db.collection('puntajes').doc('puntos').collection('ppt').get();
  }

  public obtenerResultado(){
    return this.db.collection('puntajes').doc('puntos');
  }
}
