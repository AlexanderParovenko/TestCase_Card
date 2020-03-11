import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorExpensesBarComponent } from './doctor-expenses-bar.component';

describe('DoctorExpensesBarComponent', () => {
  let component: DoctorExpensesBarComponent;
  let fixture: ComponentFixture<DoctorExpensesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorExpensesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorExpensesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
