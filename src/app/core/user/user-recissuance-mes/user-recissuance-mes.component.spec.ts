import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecissuanceMesComponent } from './user-recissuance-mes.component';

describe('UserRecissuanceMesComponent', () => {
  let component: UserRecissuanceMesComponent;
  let fixture: ComponentFixture<UserRecissuanceMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecissuanceMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecissuanceMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
