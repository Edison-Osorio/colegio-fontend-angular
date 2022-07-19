import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaSemestreComponent } from './materia-semestre.component';

describe('MateriaSemestreComponent', () => {
  let component: MateriaSemestreComponent;
  let fixture: ComponentFixture<MateriaSemestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaSemestreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
