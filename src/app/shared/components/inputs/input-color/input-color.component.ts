import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputColorComponent),
      multi: true
    }
  ]
})
export class InputColorComponent {

  @Input() label!: string;
  @Input() disabled = false;

  @Input() value!: string;

  onTouch = () => { };
  onChange = (_: string | number) => { };
  onBlur = (_: any) => { };
  onFocus = (_: any) => { };

  constructor() {
  }

  writeValue(value: string | number): void {
    this.value = `${value}` || '';
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const inputEvent = event.target as HTMLInputElement;
    this.value = inputEvent.value;
    this.onChange(this.value);
    this.onTouch();
  }
}
