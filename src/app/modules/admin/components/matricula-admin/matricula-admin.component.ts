import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/core/models/Alumno';
import { AlumnoService } from '../../services/alumno.service';
import { GradoService } from '../../services/grado.service';

@Component({
  templateUrl: './matricula-admin.component.html',
  styleUrls: ['./matricula-admin.component.css'],
})
export class MatriculaAdminComponent implements OnInit {
  grado: any = {};

  listGrados: any[] = [];

  alumno: Alumno = {
    idAlumno: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    idGradoA: '',
  };

  usuario: any = {
    tipoDocumento: 1,
    idUsuario: '',
    nombre: '',
    apellido: '',
    rol: 'alumno',
    password: '',
  };

  constructor(
    private gradoService: GradoService,
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    this.listadoGrados();
  }

  refreshFormulario() {
    this.alumno = {
      idAlumno: '',
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      idGradoA: '',
    };
    this.usuario = {
      tipoDocumento: 1,
      idUsuario: '',
      nombre: '',
      apellido: '',
      rol: 'alumno',
      password: '',
    };
  }

  listadoGrados() {
    this.gradoService.listarGrados().subscribe((grado: any) => {
      this.listGrados = grado;
    });
  }

  agregarAlumno() {
    this.usuario.idUsuario = this.alumno.idAlumno;
    this.usuario.nombre = this.alumno.nombre;
    this.usuario.apellido = this.alumno.apellido;

    const index = this.listGrados.find((grado) => grado.idGrado == this.grado);
    this.alumno.idGradoA = index;

    this.alumnoService.registrarUsuario(this.usuario).subscribe(
      (res: any) => {
        this.alumnoService.agregarAlumno(this.alumno).subscribe(
          (res) => {
            alert('Alumno matriculado');
            this.refreshFormulario();
          },
          (err) => {
            alert('No se pudo hacer la matricula del alumno');
            console.log('Este es el error ', err);
          }
        );
      },
      (err) => {
        alert('No se pudo hacer la matricula del alumno Usuario');
        console.log('Este es el error ', err);
      }
    );
  }
}
