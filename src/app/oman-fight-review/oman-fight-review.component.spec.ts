import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmanFightReviewComponent } from './oman-fight-review.component';

describe('OmanFightReviewComponent', () => {
  let component: OmanFightReviewComponent;
  let fixture: ComponentFixture<OmanFightReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmanFightReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmanFightReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
