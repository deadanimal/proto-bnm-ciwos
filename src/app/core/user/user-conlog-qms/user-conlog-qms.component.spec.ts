import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConlogQmsComponent } from './user-conlog-qms.component';

describe('UserConlogQmsComponent', () => {
  let component: UserConlogQmsComponent;
  let fixture: ComponentFixture<UserConlogQmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConlogQmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConlogQmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
