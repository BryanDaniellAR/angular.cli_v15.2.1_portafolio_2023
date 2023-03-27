import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPerfilComponent } from './about-perfil.component';

describe('AboutPerfilComponent', () => {
  let component: AboutPerfilComponent;
  let fixture: ComponentFixture<AboutPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
