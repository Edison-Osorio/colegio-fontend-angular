import { GradoAlumnoService } from './services/grado-alumno.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  user:any
  grado:any ={
    idGradoA:{
      idGrado:'',
      nombre:''
    }
  }
  constructor(private router:Router, private gradoService:GradoAlumnoService) {}
  ngOnInit(): void {
    this.styleSidebar();
   const userJson:any =  localStorage.getItem('usuario')
   this.user  = JSON.parse(userJson);

   this.listadoGrado()
  }


  listadoGrado(){
  
    this.gradoService.listarAlumno(this.user.idUsuario).subscribe((res:any)=>{
     this.grado = res.idGradoA
    })
   }


  logout(){
    localStorage.removeItem('usuario')
    this.router.navigate(['/'])
  }

  styleSidebar() {
    var el: any = document.getElementById('wrapper');
    var toggleButton: any = document.getElementById('menu-toggle');

    toggleButton.onclick = function () {
      el.classList.toggle('toggled');
    };
  }

}
