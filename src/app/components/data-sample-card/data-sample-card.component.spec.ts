import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSampleCardComponent } from './data-sample-card.component';

describe('SampleCardComponent', () => {
  let component: DataSampleCardComponent;
  let fixture: ComponentFixture<DataSampleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSampleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSampleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
