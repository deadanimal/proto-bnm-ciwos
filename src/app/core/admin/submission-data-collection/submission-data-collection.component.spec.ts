import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDataCollectionComponent } from './submission-data-collection.component';

describe('SubmissionDataCollectionComponent', () => {
  let component: SubmissionDataCollectionComponent;
  let fixture: ComponentFixture<SubmissionDataCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionDataCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionDataCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
