import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementStrategicSourcingComponent } from './procurement-strategic-sourcing.component';

describe('ProcurementStrategicSourcingComponent', () => {
  let component: ProcurementStrategicSourcingComponent;
  let fixture: ComponentFixture<ProcurementStrategicSourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementStrategicSourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementStrategicSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
