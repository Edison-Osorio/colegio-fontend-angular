import { MateriaSemestreComponent } from './components/materia-semestre/materia-semestre.component';
import { MateriasGradoStudentComponent } from './components/materias-grado-student/materias-grado-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [{ path: '', component: StudentComponent, children:[
  {
    path:'materia', component:MateriasGradoStudentComponent
  },
  {
    path:'materias-semestre', component:MateriaSemestreComponent
  }
] },
{
  path:'**', redirectTo:'/alumno'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
