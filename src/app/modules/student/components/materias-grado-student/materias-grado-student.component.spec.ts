import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasGradoStudentComponent } from './materias-grado-student.component';

describe('MateriasGradoStudentComponent', () => {
  let component: MateriasGradoStudentComponent;
  let fixture: ComponentFixture<MateriasGradoStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasGradoStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasGradoStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
