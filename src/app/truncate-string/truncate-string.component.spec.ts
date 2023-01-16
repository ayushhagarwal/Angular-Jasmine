import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateStringComponent } from './truncate-string.component';

describe('TruncateStringComponent', () => {
  let component: TruncateStringComponent;
  let fixture: ComponentFixture<TruncateStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruncateStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruncateStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
