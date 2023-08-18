import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;//input contraseña
//definimos de forma publica el servicio auth
  constructor(public servicoAuth: AuthService){}
  //importacion del modelo
  usuarios:Usuario ={ 
    uid:'',
    nombre:'',
    contrasena:'',
  }
  //tomamodo nuevo registrto
   async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contraseña: this.usuarios.contrasena
    };
    const res = await this.servicoAuth.registrar(credenciales.nombre, credenciales.contraseña).then(res => {
      alert("ha agregado un nuevo usuario con éxito")
    })
    console.log(res)
  }
}
