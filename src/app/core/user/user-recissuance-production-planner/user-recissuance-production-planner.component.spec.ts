import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecissuanceProductionPlannerComponent } from './user-recissuance-production-planner.component';

describe('UserRecissuanceProductionPlannerComponent', () => {
  let component: UserRecissuanceProductionPlannerComponent;
  let fixture: ComponentFixture<UserRecissuanceProductionPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecissuanceProductionPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecissuanceProductionPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
