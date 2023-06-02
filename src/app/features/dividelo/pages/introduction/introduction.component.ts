import { Component } from '@angular/core';
import { ToastType } from "../../../../shared/enums/toast/toast.enum";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  protected readonly ToastType = ToastType;
}
