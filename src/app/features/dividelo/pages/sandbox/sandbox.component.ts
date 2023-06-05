import { Component } from '@angular/core';
import { ToastType } from "../../../../shared/enums/toast/toast.enum";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent {

  protected readonly ToastType = ToastType;
}
