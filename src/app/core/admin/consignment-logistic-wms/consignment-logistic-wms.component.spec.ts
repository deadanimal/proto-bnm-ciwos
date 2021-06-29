import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentLogisticWmsComponent } from './consignment-logistic-wms.component';

describe('ConsignmentLogisticWmsComponent', () => {
  let component: ConsignmentLogisticWmsComponent;
  let fixture: ComponentFixture<ConsignmentLogisticWmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentLogisticWmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentLogisticWmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
