import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;//input contraseña
//definimos de forma publica el servicio auth
  constructor(public servicoAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router:Router
    ){}
  //importacion del modelo
  usuarios:Usuario ={ 
    uid:'',
    nombre:'',
    contrasena:'',
    nombre1:'',
    rol:''

  }
  uid ='';
  coleccionUsuarios: Usuario[]=[];
  //tomamodo nuevo registrto
   async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contraseña: this.usuarios.contrasena
    };
    const res = await this.servicoAuth.registrar(credenciales.nombre, credenciales.contraseña)
    .then(res => {
     //metodo CATCH creara un error en caso que algo salga mal.
      alert("ha agregado un nuevo usuario con éxito")
      this.router.navigate(["/inicio"])
    })
    .catch(error =>
      alert("hubo un error al crear un usurario :( \n " + error))
      //creamos constante uid para el uid que obtengampos
    const uid = await this.servicoAuth.getUid();

    //referenciamos uid con el nuevo usuario
    this.usuarios.uid=uid;

    //llamamos funcion guardar user
    this.guardaUser();
    //funcion asincronica para guardar usuario
  }async guardaUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
     console.log(this.usuarios);

       })
       .catch(error=>{
        console.log('Error=>', error);
       }
        )

 
}
async ngOnInit(){
  const uid =await this.servicoAuth.getUid();
  console.log(uid);
}
}
      