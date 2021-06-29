import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IventoryPlacementMovementComponent } from './iventory-placement-movement.component';

describe('IventoryPlacementMovementComponent', () => {
  let component: IventoryPlacementMovementComponent;
  let fixture: ComponentFixture<IventoryPlacementMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IventoryPlacementMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IventoryPlacementMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
