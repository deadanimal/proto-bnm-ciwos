import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityApprovedBlankCoinComponent } from './quality-approved-blank-coin.component';

describe('QualityApprovedBlankCoinComponent', () => {
  let component: QualityApprovedBlankCoinComponent;
  let fixture: ComponentFixture<QualityApprovedBlankCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityApprovedBlankCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityApprovedBlankCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
