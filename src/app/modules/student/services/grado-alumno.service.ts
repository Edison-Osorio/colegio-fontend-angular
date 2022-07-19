import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradoAlumnoService {

  @Output() gradoAEmitir:EventEmitter<any> =new EventEmitter()

  private readonly url  = environment.api

  constructor(private http:HttpClient) { }

  listarAlumno(idAlumno:any){
  return this.http.get(`${this.url}/alumnos/${idAlumno}`)
  }

  listarMaterias(){
    return this.http.get(`${this.url}/materias`)
  }

  listarSemestres(){
    return this.http.get(`${this.url}/semestres`)
  }


}
