import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecialityComponent } from './home-speciality.component';

describe('HomeSpecialityComponent', () => {
  let component: HomeSpecialityComponent;
  let fixture: ComponentFixture<HomeSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpecialityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
