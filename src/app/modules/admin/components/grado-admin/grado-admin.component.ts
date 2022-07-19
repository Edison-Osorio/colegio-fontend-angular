import { Component, OnInit } from '@angular/core';
import { GradoService } from '../../services/grado.service';

@Component({
  templateUrl: './grado-admin.component.html',
  styleUrls: ['./grado-admin.component.css'],
})
export class GradoAdminComponent implements OnInit {
  grados: any[] = [];
  grado: any = {
    idGrado: '',
    nombre: '',
  };

  constructor(private gradoService: GradoService) {}

  ngOnInit(): void {
    this.listaGrados();
  }

  codigoTransmitido(grado: any) {
    this.gradoService.codigoGrado.emit(grado);
  }

  listaGrados() {
    this.gradoService.listarGrados().subscribe((grado: any) => {
      this.grados = grado;
    });
  }

  agregarGrado() {
    delete 
    this.grado.idGrado
    this.gradoService.agregarGrado(this.grado).subscribe((res) => {
      alert('Grado Agregado');
      document.getElementById('cancel')?.click();
      this.listaGrados();

    });
  }
}
