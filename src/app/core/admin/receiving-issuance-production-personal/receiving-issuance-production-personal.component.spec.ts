import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingIssuanceProductionPersonalComponent } from './receiving-issuance-production-personal.component';

describe('ReceivingIssuanceProductionPersonalComponent', () => {
  let component: ReceivingIssuanceProductionPersonalComponent;
  let fixture: ComponentFixture<ReceivingIssuanceProductionPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivingIssuanceProductionPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivingIssuanceProductionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
