import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementVendorListComponent } from './procurement-vendor-list.component';

describe('ProcurementVendorListComponent', () => {
  let component: ProcurementVendorListComponent;
  let fixture: ComponentFixture<ProcurementVendorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementVendorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
