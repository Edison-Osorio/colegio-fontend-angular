import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private readonly url = environment.api

  constructor(private http:HttpClient) { }

  listarAlumnos(){
    return this.http.get(`${this.url}/alumnos`);
  }

  agregarAlumno(alumno:any){
  return this.http.post(`${this.url}/alumnos`, alumno);
  }

  
registrarUsuario(usuario:any){
  return this.http.post(`${this.url}/auth/signup`, usuario)
  }
actualizarUsuario(usuario:any){
  return this.http.put(`${this.url}/auth/${usuario.idUsuario}`, usuario)
  }

  actualizarAlumno(alumno:any){
  return this.http.put(`${this.url}/alumnos/${alumno.idAlumno}`, alumno)
  }

  eliminarAlumno(idAlumno:any){
    return this.http.delete(`${this.url}/alumnos/${idAlumno}`)
  }


}
