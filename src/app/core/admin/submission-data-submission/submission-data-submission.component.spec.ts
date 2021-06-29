import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDataSubmissionComponent } from './submission-data-submission.component';

describe('SubmissionDataSubmissionComponent', () => {
  let component: SubmissionDataSubmissionComponent;
  let fixture: ComponentFixture<SubmissionDataSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionDataSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionDataSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
