import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyTestComponent } from './multiply-test.component';

describe('MultiplyTestComponent', () => {
  let component: MultiplyTestComponent;
  let fixture: ComponentFixture<MultiplyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplyTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should multiply two numbers without depending on input change', () => {
    component.num1 = 5;
    component.num2 = 10;
    component.onChange();
    expect(component.result).toEqual(50);
  });
});
