import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntityFlowComponent } from './legal-entity-flow.component';

describe('LegalEntityFlowComponent', () => {
  let component: LegalEntityFlowComponent;
  let fixture: ComponentFixture<LegalEntityFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalEntityFlowComponent]
    });
    fixture = TestBed.createComponent(LegalEntityFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
