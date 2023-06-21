import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalPersonFlowComponent } from './natural-person-flow.component';

describe('NaturalPersonFlowComponent', () => {
  let component: NaturalPersonFlowComponent;
  let fixture: ComponentFixture<NaturalPersonFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaturalPersonFlowComponent]
    });
    fixture = TestBed.createComponent(NaturalPersonFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
