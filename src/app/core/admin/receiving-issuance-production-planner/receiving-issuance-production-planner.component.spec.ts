import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingIssuanceProductionPlannerComponent } from './receiving-issuance-production-planner.component';

describe('ReceivingIssuanceProductionPlannerComponent', () => {
  let component: ReceivingIssuanceProductionPlannerComponent;
  let fixture: ComponentFixture<ReceivingIssuanceProductionPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivingIssuanceProductionPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivingIssuanceProductionPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
