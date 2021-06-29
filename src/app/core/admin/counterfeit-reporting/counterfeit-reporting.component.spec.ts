import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfeitReportingComponent } from './counterfeit-reporting.component';

describe('CounterfeitReportingComponent', () => {
  let component: CounterfeitReportingComponent;
  let fixture: ComponentFixture<CounterfeitReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterfeitReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterfeitReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
