import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanTestComponent } from './boolean-test.component';

describe('BooleanTestComponent', () => {
  let component: BooleanTestComponent;
  let fixture: ComponentFixture<BooleanTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should toggle the value of isVisible', () => {
    component.toggleVisibility();
    expect(component.isVisible).toEqual(false);
    component.toggleVisibility();
    expect(component.isVisible).toEqual(true);
    });
});
