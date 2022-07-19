import { GradoService } from './../../../services/grado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grado-materia',
  templateUrl: './grado-materia.component.html',
  styleUrls: ['./grado-materia.component.css'],
})
export class GradoMateriaComponent implements OnInit {

  showAdd!:boolean
  showUpdate!:boolean
  idGrado: number = 0;
  materias: any;
  materias_grado: any[] = [];
  grado: string = '';

  materia: any = {
    idMateria: '',
    nombre: '',
    idGradoM: '',
  };

  titleModal = '';

  constructor(private gradoService: GradoService) {}

  ngOnInit(): void {
    this.listadoMaterias();
  }

  refresh() {
    this.showAdd = true
    this.showUpdate = false
    this.materia = {
      idMateria: '',
      nombre: '',
      idGradoM: this.idGrado,
    };

    this.titleModal = 'Agregar';

    console.log('Este es el objeto de materia uwuw', this.materia);
  }

  listadoMaterias() {
    this.gradoService.listadorMaterias().subscribe((matrias: any) => {
      this.materias = matrias;
    });
    this.gradoService.codigoGrado.subscribe((grado: any) => {
      this.grado = grado.nombre;
      this.idGrado = grado;
      this.materiasGrado(grado);
    });
  }

  materiasGrado(grado: any) {
    this.materias_grado = this.materias.filter(
      (item: any) => item.idGradoM.idGrado == grado.idGrado
    );
  }

  cargarMateria(materia: any) {
    this.showAdd = false
    this.showUpdate = true
    this.titleModal = 'Actualizar';
    this.materia = materia;
  }

  agregarMateria() {
    delete this.materia.idMateria;
    // delete this.materia.idGradoM;
    this.gradoService.agregarMateria(this.materia).subscribe(
      (res) => {
        alert('Materia Creada');
        document.getElementById('cancelar')?.click();
        this.materias_grado.push(res);
      },
      (err) => {
        alert('No se pudo crear la materia');
      }
    );
  }


  actualizarMateria(){
    this.gradoService.modificarMateria(this.materia).subscribe((res:any)=>{
      alert('Materia actializada')
      document.getElementById('cancelar')?.click();
    },
    err=>{
     alert('No se pudo actualizar la materia') 
      console.log('error ', err)
    }
    
    )
  }

  eliminarMateria(idMateria: number) {
    if (confirm('¿Está seguro de eliminar esta materia?')) {
      console.log('Eliminar persona con id:', idMateria);
      const index = this.materias_grado.findIndex(
        (materia) => materia.idMateria == idMateria
      );
      this.gradoService.eliminarMateria(idMateria)
      .subscribe((res) => {
        alert('Materia eliminada');
        console.log('respuesta de la eliminacion ', res);
        this.materias_grado.slice(index, 1);
        
      });
    }
  }
}
