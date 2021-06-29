import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCoinStockComponent } from './submission-coin-stock.component';

describe('SubmissionCoinStockComponent', () => {
  let component: SubmissionCoinStockComponent;
  let fixture: ComponentFixture<SubmissionCoinStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionCoinStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionCoinStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
