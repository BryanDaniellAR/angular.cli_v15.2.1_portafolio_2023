import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperienceComponent } from './about-experience.component';

describe('AboutExperienceComponent', () => {
  let component: AboutExperienceComponent;
  let fixture: ComponentFixture<AboutExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
