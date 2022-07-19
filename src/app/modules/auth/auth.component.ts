import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  usuario ={
    idUsuario: "", 
    password: ''
  } 

  ingresar(){
    this.authService.inicioSesion(this.usuario).subscribe((res:any)=>{
      switch (res.rol) {
        case 'admin':
          localStorage.setItem('usuario', JSON.stringify(res))
          
          this.router.navigate(['admin'])
          break;
          case 'alumno':
          localStorage.setItem('usuario', JSON.stringify(res))
          this.router.navigate(['alumno'])
          break;
      
        default:
          this.router.navigate(['/'])
          break;
      }
    },
   (err:any) =>{
    console.log('Mensage del error', err.error);
    alert(err.error);
   }
    )
  }

}
