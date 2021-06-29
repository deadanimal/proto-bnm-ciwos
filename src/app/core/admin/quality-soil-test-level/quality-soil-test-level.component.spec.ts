import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitySoilTestLevelComponent } from './quality-soil-test-level.component';

describe('QualitySoilTestLevelComponent', () => {
  let component: QualitySoilTestLevelComponent;
  let fixture: ComponentFixture<QualitySoilTestLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitySoilTestLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitySoilTestLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
