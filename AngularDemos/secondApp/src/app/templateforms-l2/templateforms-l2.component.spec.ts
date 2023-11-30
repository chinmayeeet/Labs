import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformsL2Component } from './templateforms-l2.component';

describe('TemplateformsL2Component', () => {
  let component: TemplateformsL2Component;
  let fixture: ComponentFixture<TemplateformsL2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateformsL2Component]
    });
    fixture = TestBed.createComponent(TemplateformsL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
