import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmanFareSummaryComponent } from './oman-fare-summary.component';

describe('OmanFareSummaryComponent', () => {
  let component: OmanFareSummaryComponent;
  let fixture: ComponentFixture<OmanFareSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmanFareSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmanFareSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
