import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedWordsComponent } from './prohibited-words.component';

describe('ProhibitedWordsComponent', () => {
  let component: ProhibitedWordsComponent;
  let fixture: ComponentFixture<ProhibitedWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProhibitedWordsComponent]
    });
    fixture = TestBed.createComponent(ProhibitedWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
