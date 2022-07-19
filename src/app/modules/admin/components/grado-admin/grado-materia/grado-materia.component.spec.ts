import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoMateriaComponent } from './grado-materia.component';

describe('GradoMateriaComponent', () => {
  let component: GradoMateriaComponent;
  let fixture: ComponentFixture<GradoMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradoMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
