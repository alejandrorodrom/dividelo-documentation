import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpBlockComponent } from './http-block.component';

describe('HttpBlockComponent', () => {
  let component: HttpBlockComponent;
  let fixture: ComponentFixture<HttpBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpBlockComponent]
    });
    fixture = TestBed.createComponent(HttpBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
