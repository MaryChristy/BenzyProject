import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmanPricingComponent } from './oman-pricing.component';

describe('OmanPricingComponent', () => {
  let component: OmanPricingComponent;
  let fixture: ComponentFixture<OmanPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmanPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmanPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
