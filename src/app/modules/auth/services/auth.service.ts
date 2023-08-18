import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //refereciar la autenticacion de firebase

  constructor(public auth: AngularFireAuth) { }
  registrar(nombre: string, contraseña: string)
  //retorna nueva informacion de registro 
  {return this.auth.createUserWithEmailAndPassword (nombre,contraseña)}
  
}
