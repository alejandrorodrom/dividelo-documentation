import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSwitchComponent),
      multi: true
    }
  ]
})
export class InputSwitchComponent {

  @Input() label!: string;

  @Input() disabled = false;

  @Input() checked: boolean = false;

  onTouch = () => { };
  onChange = (_: boolean) => { };
  onBlur = (_: any) => { };
  onFocus = (_: any) => { };

  constructor() {
  }

  writeValue(value: boolean): void {
    this.checked = value;
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
    this.checked = inputEvent.checked;
    this.onChange(this.checked);
    this.onTouch();
  }

}
