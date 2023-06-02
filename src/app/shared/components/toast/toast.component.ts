import { Component, Input } from '@angular/core';
import { ToastType } from "../../enums/toast/toast.enum";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  @Input() type!: ToastType;

  getToastColor(type: ToastType): string {
    switch (type) {
      case ToastType.ERROR:
        return '#FBCCDA';
      case ToastType.WARN:
        return '#FFEFCA';
      case ToastType.INFO:
        return '#E0F0FA';
    }
  };

  getIconUrl(type: ToastType): string {
    switch (type) {
      case ToastType.ERROR:
        return 'assets/images/toast/error.svg';
      case ToastType.WARN:
        return 'assets/images/toast/info.svg';
      case ToastType.INFO:
        return 'assets/images/toast/info_blue.svg';
    }
  }

}
