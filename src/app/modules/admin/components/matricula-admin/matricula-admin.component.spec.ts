import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaAdminComponent } from './matricula-admin.component';

describe('MatriculaAdminComponent', () => {
  let component: MatriculaAdminComponent;
  let fixture: ComponentFixture<MatriculaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
