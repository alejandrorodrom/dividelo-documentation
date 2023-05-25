import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStepsComponent } from './front-steps.component';

describe('FrontStepsComponent', () => {
  let component: FrontStepsComponent;
  let fixture: ComponentFixture<FrontStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontStepsComponent]
    });
    fixture = TestBed.createComponent(FrontStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
