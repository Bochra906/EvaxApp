import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVaccinComponent } from './centre-vaccin.component';

describe('CentreVaccinComponent', () => {
  let component: CentreVaccinComponent;
  let fixture: ComponentFixture<CentreVaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreVaccinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
