import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private db: AngularFirestore) { }

  public obtenerPalabras(){
    return this.db.collection("datos").doc("palabras").get();
  }

  public obtenerAvatars(){
    return this.db.collection("datos").doc("avatars").get();
  }
}
