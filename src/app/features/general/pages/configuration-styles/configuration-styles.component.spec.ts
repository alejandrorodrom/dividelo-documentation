import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationStylesComponent } from './configuration-styles.component';

describe('ConfigurationStylesComponent', () => {
  let component: ConfigurationStylesComponent;
  let fixture: ComponentFixture<ConfigurationStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationStylesComponent]
    });
    fixture = TestBed.createComponent(ConfigurationStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
