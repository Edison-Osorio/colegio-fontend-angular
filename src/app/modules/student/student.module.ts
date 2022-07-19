import { MateriaSemestreComponent } from './components/materia-semestre/materia-semestre.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { HttpClientModule } from '@angular/common/http';
import { MateriasGradoStudentComponent } from './components/materias-grado-student/materias-grado-student.component';

@NgModule({
  declarations: [
    StudentComponent,
    MateriasGradoStudentComponent,
    MateriaSemestreComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, HttpClientModule, FormsModule],
})
export class StudentModule {}
