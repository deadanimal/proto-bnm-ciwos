import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecissuanceProductionPersonalComponent } from './user-recissuance-production-personal.component';

describe('UserRecissuanceProductionPersonalComponent', () => {
  let component: UserRecissuanceProductionPersonalComponent;
  let fixture: ComponentFixture<UserRecissuanceProductionPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecissuanceProductionPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecissuanceProductionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
