import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityReportingComponent } from './quality-reporting.component';

describe('QualityReportingComponent', () => {
  let component: QualityReportingComponent;
  let fixture: ComponentFixture<QualityReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
