import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentLogisticOcrComponent } from './consignment-logistic-ocr.component';

describe('ConsignmentLogisticOcrComponent', () => {
  let component: ConsignmentLogisticOcrComponent;
  let fixture: ComponentFixture<ConsignmentLogisticOcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentLogisticOcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentLogisticOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
