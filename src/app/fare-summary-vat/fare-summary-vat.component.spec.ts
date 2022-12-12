import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareSummaryVatComponent } from './fare-summary-vat.component';

describe('FareSummaryVatComponent', () => {
  let component: FareSummaryVatComponent;
  let fixture: ComponentFixture<FareSummaryVatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareSummaryVatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareSummaryVatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
