import { GradoAlumnoService } from './../../services/grado-alumno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias-grado-student',
  templateUrl: './materias-grado-student.component.html',
  styleUrls: ['./materias-grado-student.component.css'],
})
export class MateriasGradoStudentComponent implements OnInit {
  user:any
  grado:any
  materias: any[] = [];
  materias_grado: any[] = [];

  constructor(private gradoService: GradoAlumnoService) {}

  ngOnInit(): void {
    this.listadoMaterias();
    
    const userJson:any =  localStorage.getItem('usuario')
    this.user  = JSON.parse(userJson);
   
  }
  
  listadoMaterias() {
    this.gradoService.listarMaterias().subscribe((res: any) => {
      this.materias = res;
      this.listadoGrado()
    });
  }
  listadoGrado(){
  
    this.gradoService.listarAlumno(this.user.idUsuario).subscribe((res:any)=>{
     this.grado = res.idGradoA
     this.materiasGrado(res.idGradoA)
    })
   }


  materiasGrado(grado: any) {
    this.materias_grado = this.materias.filter(
      (item: any) => item.idGradoM.idGrado == grado.idGrado
    );
    
  }
}
