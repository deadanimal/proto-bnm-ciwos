import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionReportingComponent } from './submission-reporting.component';

describe('SubmissionReportingComponent', () => {
  let component: SubmissionReportingComponent;
  let fixture: ComponentFixture<SubmissionReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
