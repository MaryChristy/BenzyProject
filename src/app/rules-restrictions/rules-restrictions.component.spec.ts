import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRestrictionsComponent } from './rules-restrictions.component';

describe('RulesRestrictionsComponent', () => {
  let component: RulesRestrictionsComponent;
  let fixture: ComponentFixture<RulesRestrictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesRestrictionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
