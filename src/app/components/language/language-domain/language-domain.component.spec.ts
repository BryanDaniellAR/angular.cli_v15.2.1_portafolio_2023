import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDomainComponent } from './language-domain.component';

describe('LanguageDomainComponent', () => {
  let component: LanguageDomainComponent;
  let fixture: ComponentFixture<LanguageDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
