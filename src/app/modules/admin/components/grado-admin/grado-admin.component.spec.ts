import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoAdminComponent } from './grado-admin.component';

describe('GradoAdminComponent', () => {
  let component: GradoAdminComponent;
  let fixture: ComponentFixture<GradoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
