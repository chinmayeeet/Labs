import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinpipeComponent } from './builtinpipe.component';

describe('BuiltinpipeComponent', () => {
  let component: BuiltinpipeComponent;
  let fixture: ComponentFixture<BuiltinpipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltinpipeComponent]
    });
    fixture = TestBed.createComponent(BuiltinpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
