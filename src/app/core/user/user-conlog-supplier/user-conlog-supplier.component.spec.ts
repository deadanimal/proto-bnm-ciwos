import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConlogSupplierComponent } from './user-conlog-supplier.component';

describe('UserConlogSupplierComponent', () => {
  let component: UserConlogSupplierComponent;
  let fixture: ComponentFixture<UserConlogSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConlogSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConlogSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
