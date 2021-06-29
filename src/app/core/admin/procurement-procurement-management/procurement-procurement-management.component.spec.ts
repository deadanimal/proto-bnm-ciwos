import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementProcurementManagementComponent } from './procurement-procurement-management.component';

describe('ProcurementProcurementManagementComponent', () => {
  let component: ProcurementProcurementManagementComponent;
  let fixture: ComponentFixture<ProcurementProcurementManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementProcurementManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementProcurementManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
