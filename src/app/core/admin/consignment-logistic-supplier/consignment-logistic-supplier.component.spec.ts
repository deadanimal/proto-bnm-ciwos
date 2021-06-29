import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentLogisticSupplierComponent } from './consignment-logistic-supplier.component';

describe('ConsignmentLogisticSupplierComponent', () => {
  let component: ConsignmentLogisticSupplierComponent;
  let fixture: ComponentFixture<ConsignmentLogisticSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentLogisticSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentLogisticSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
