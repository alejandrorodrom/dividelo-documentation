import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent {

  @Input() label?: string;
  @Input() type: 'text' | 'number' = 'text';
  @Input() placeholder!: string;
  @Input() required: boolean = false;
  @Input() error: boolean = false;
  @Input() disabled = false;

  value!: string;

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
