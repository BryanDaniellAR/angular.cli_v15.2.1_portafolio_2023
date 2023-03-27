import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNameComponent } from './home-name.component';

describe('HomeNameComponent', () => {
  let component: HomeNameComponent;
  let fixture: ComponentFixture<HomeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
