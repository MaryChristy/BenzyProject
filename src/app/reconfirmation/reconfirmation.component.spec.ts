import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconfirmationComponent } from './reconfirmation.component';

describe('ReconfirmationComponent', () => {
  let component: ReconfirmationComponent;
  let fixture: ComponentFixture<ReconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
