import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityApprovedBlankNoteComponent } from './quality-approved-blank-note.component';

describe('QualityApprovedBlankNoteComponent', () => {
  let component: QualityApprovedBlankNoteComponent;
  let fixture: ComponentFixture<QualityApprovedBlankNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityApprovedBlankNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityApprovedBlankNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
