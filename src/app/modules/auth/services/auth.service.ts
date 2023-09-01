import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //refereciar la autenticacion de firebase

  constructor(public auth: AngularFireAuth) { }
  registrar(nombre: string, contraseña: string)
  //retorna nueva informacion de registro 
  {return this.auth.createUserWithEmailAndPassword (nombre,contraseña)}
  //funcion asincronica para tomar UID
  async getUid(){
    //CURRENTUSER ->
    const user =await this.auth.currentUser;
  if (user==null) {
    return null;
  }else{
    return user.uid;
  }
  }
}
