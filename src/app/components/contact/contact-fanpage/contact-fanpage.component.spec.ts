import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFanpageComponent } from './contact-fanpage.component';

describe('ContactFanpageComponent', () => {
  let component: ContactFanpageComponent;
  let fixture: ComponentFixture<ContactFanpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFanpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFanpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
