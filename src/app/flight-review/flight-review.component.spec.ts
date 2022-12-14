import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReviewComponent } from './flight-review.component';

describe('FlightReviewComponent', () => {
  let component: FlightReviewComponent;
  let fixture: ComponentFixture<FlightReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
