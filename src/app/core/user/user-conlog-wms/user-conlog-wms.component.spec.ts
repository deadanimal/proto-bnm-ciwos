import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConlogWmsComponent } from './user-conlog-wms.component';

describe('UserConlogWmsComponent', () => {
  let component: UserConlogWmsComponent;
  let fixture: ComponentFixture<UserConlogWmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConlogWmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConlogWmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
