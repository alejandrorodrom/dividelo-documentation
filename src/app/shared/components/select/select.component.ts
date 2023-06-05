import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { Select } from "../../interfaces/select/select.interface";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit {

  @Input() label?: string;
  @Input() options!: Select[];
  @Input() disabled = false;

  @Output() selected = new EventEmitter<boolean>();

  selectedOption!: Select;

  openSelect: boolean = false;

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

  ngOnInit(): void {
    this.selectedOption = this.getDefaultOption();
  }

  getDefaultOption(): Select {
    const defaultOption: Select = this.options.find(option => option.selected === true) as Select;
    return defaultOption ? defaultOption : this.options[0];
  }

  swapSelect(): void {
    this.openSelect = !this.openSelect;
  }

  close(): void {
    this.openSelect = false;
  }

  select(optionValue: string): void {
    this.selectedOption = this.options.find(option => option.value === optionValue) as Select;
    this.options.map(option => option.selected = false);
    this.selectedOption.selected = true;
    this.close();
    this.value = this.selectedOption.value;
    this.onChange(this.selectedOption.value);
    this.onTouch();
    this.selected.emit(true);
  }

  outsideClick(): void {
    this.close();
  }
}
