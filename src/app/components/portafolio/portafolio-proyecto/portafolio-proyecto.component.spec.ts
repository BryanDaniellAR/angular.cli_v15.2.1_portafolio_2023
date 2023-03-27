import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioProyectoComponent } from './portafolio-proyecto.component';

describe('PortafolioProyectoComponent', () => {
  let component: PortafolioProyectoComponent;
  let fixture: ComponentFixture<PortafolioProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
