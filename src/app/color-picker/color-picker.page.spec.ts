import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerPage } from './color-picker.page';

describe('ColorPickerPage', () => {
  let component: ColorPickerPage;
  let fixture: ComponentFixture<ColorPickerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
