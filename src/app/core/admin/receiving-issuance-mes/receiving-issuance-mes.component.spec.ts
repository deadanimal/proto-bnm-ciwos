import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingIssuanceMesComponent } from './receiving-issuance-mes.component';

describe('ReceivingIssuanceMesComponent', () => {
  let component: ReceivingIssuanceMesComponent;
  let fixture: ComponentFixture<ReceivingIssuanceMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivingIssuanceMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivingIssuanceMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
