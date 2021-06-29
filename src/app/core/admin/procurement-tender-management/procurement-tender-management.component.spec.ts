import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementTenderManagementComponent } from './procurement-tender-management.component';

describe('ProcurementTenderManagementComponent', () => {
  let component: ProcurementTenderManagementComponent;
  let fixture: ComponentFixture<ProcurementTenderManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementTenderManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementTenderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
