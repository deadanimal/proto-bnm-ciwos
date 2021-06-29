import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentLogisticQmsComponent } from './consignment-logistic-qms.component';

describe('ConsignmentLogisticQmsComponent', () => {
  let component: ConsignmentLogisticQmsComponent;
  let fixture: ComponentFixture<ConsignmentLogisticQmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentLogisticQmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentLogisticQmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
