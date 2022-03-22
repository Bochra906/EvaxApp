import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifVaccinComponent } from './certif-vaccin.component';

describe('CertifVaccinComponent', () => {
  let component: CertifVaccinComponent;
  let fixture: ComponentFixture<CertifVaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifVaccinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
