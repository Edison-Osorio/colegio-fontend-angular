import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/core/models/Alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent implements OnInit {

  showAdd!:boolean
  showUpdate!:boolean

  titleModal:string = ''

  alumnos:any[]  = [];

   alumno:Alumno = {
     idAlumno: 0,
     nombre: '',
     apellido: '',
     email: '',
     telefono: ''
   }

   usuario: any = {
    idUsuario: '',
    nombre: '',
    apellido: '',
    rol: 'alumno',
  };

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.listadoAlumnos()
  }

  refres(){
    this.titleModal = 'Agregar'
    this.showAdd = true
    this.showUpdate= false
    this.alumno = {
      idAlumno: 0,
      nombre: '',
      apellido: '',
      email: '',
      telefono: ''
    }
  }
 
  listadoAlumnos(){
    this.alumnoService.listarAlumnos().subscribe((alumno:any)=>{
      console.log('Estos son los alumnos = ', alumno);
      this.alumnos = alumno
    })
  }

 
  cargarAlumno(alumno:any){
    this.titleModal = 'Actualizar'
    this.alumno  = alumno
    this.showAdd = false
    this.showUpdate= true
  }
  actualizarAlumno(){
this.usuario.idUsuario= this.alumno.idAlumno
this.usuario.nombre= this.alumno.nombre
this.usuario.apellido= this.alumno.apellido
    
console.log('Alumno actualizado', this.alumno);
console.log('Usuario actualizado', this.usuario);

this.alumnoService.actualizarUsuario(this.usuario).subscribe((res:any)=>{
  this.alumnoService.actualizarAlumno(this.alumno).subscribe((alumnoModificado:any)=>{
    alert('Alumno modificado')
    this.listadoAlumnos
    document.getElementById('cancel')?.click()
  }, 
  err=>{
    alert('No se puedo actualizar el alumno')
    console.log('Este es el error ', err);
    
  }
  )
  
}, 
err =>{
  alert('No se pudo actializar el usuario')
  console.log('Este es el error ', err);
  
})

  }


  eliminarAlumno(idAlumno:any){
    if (confirm('Esta seguro de eliminar este alumno')) {
      const index = this.alumnos.findIndex((alumno)=>alumno.idAlumno == idAlumno)
    
    this.alumnoService.eliminarAlumno(idAlumno).subscribe((res)=>{
      alert('Alumno eliminado')
      console.log('Respuesta ', res);
      // this.alumnos.slice(index, 1)
      this.listadoAlumnos()
      
    },
    err => console.log('Este es el erro', err)
    )
  }
}

}
