import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GradoService {
  @Output() codigoGrado: EventEmitter<any> = new EventEmitter();

  private readonly url = environment.api;

  constructor(private http: HttpClient) {}

  listarGrados() {
    return this.http.get(`${this.url}/grados`);
  }

  listadorMaterias() {
    return this.http.get(`${this.url}/materias`);
  }

  agregarGrado(grado: any) {
    return this.http.post(`${this.url}/grados`, grado);
  }

  agregarMateria(materia:any){
    // materia.
return this.http.post(`${this.url}/materias`, materia)
  }

modificarMateria(materia:any){
return this.http.put(`${this.url}/materias/${materia.idMateria}`, materia)
}

eliminarMateria(idMateria: any){
  return this.http.delete(`${this.url}/materias/${idMateria}`)
}


}
