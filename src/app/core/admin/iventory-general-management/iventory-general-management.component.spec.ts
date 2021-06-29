import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IventoryGeneralManagementComponent } from './iventory-general-management.component';

describe('IventoryGeneralManagementComponent', () => {
  let component: IventoryGeneralManagementComponent;
  let fixture: ComponentFixture<IventoryGeneralManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IventoryGeneralManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IventoryGeneralManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
