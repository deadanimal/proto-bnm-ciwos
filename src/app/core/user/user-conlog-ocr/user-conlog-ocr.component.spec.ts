import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConlogOcrComponent } from './user-conlog-ocr.component';

describe('UserConlogOcrComponent', () => {
  let component: UserConlogOcrComponent;
  let fixture: ComponentFixture<UserConlogOcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConlogOcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConlogOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
