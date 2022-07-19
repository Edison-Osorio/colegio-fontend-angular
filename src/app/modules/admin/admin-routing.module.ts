import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GradoAdminComponent } from './components/grado-admin/grado-admin.component';
import { GradoMateriaComponent } from './components/grado-admin/grado-materia/grado-materia.component';
import { MatriculaAdminComponent } from './components/matricula-admin/matricula-admin.component';
import { StudentAdminComponent } from './components/student-admin/student-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'grado',
        component: GradoAdminComponent,
        children: [
          { path: 'materia/:idGrado', component: GradoMateriaComponent },
        ],
      },
      {
        path: 'alumnos',
        component: StudentAdminComponent,
      },
      {
        path: 'matricula',
        component: MatriculaAdminComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/admin',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
