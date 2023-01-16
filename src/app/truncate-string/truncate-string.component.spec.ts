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

  it('should truncate text if it is longer than 50 characters', () => {
    component.truncateString();
    expect(component.truncatedString.length).toBeLessThanOrEqual(50);
    expect(component.truncatedString).toEqual(component.longDescription.slice(0, 50));
  });
});
