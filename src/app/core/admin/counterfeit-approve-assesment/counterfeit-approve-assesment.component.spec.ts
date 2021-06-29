import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfeitApproveAssesmentComponent } from './counterfeit-approve-assesment.component';

describe('CounterfeitApproveAssesmentComponent', () => {
  let component: CounterfeitApproveAssesmentComponent;
  let fixture: ComponentFixture<CounterfeitApproveAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterfeitApproveAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterfeitApproveAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
