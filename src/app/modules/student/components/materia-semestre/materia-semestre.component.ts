import { GradoAlumnoService } from './../../services/grado-alumno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia-semestre',
  templateUrl: './materia-semestre.component.html',
  styleUrls: ['./materia-semestre.component.css']
})
export class MateriaSemestreComponent implements OnInit {
  user:any
  grado:any
  materias: any[] = [];
  materias_grado: any[] = [];

  semestres:any[]=[]

  materiasSemestre:any ={
    idSemestre:'',
    idMateria: ''
  }

  constructor(private gradoService:GradoAlumnoService) { }

  ngOnInit(): void {
    this.listadoSemestres()
    this.listadoMaterias()
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
  listadoSemestres(){
this.gradoService.listarSemestres().subscribe((semestres:any)=>{
  console.log('Estos son los semestres', semestres);
  this.semestres =semestres
})
  }

  agregarMateriasSemestre(){
    console.log('Estas son las materias de este sematre', this.materiasSemestre);
    
  }

}
