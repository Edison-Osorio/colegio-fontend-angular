import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { GradoAdminComponent } from './components/grado-admin/grado-admin.component';
import { StudentAdminComponent } from './components/student-admin/student-admin.component';
import { MatriculaAdminComponent } from './components/matricula-admin/matricula-admin.component';
import { GradoMateriaComponent } from './components/grado-admin/grado-materia/grado-materia.component';


@NgModule({
  declarations: [
    AdminComponent,
    GradoAdminComponent,
    StudentAdminComponent,
    MatriculaAdminComponent,
    GradoMateriaComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
