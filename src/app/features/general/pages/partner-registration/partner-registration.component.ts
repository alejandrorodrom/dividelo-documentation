import { Component } from '@angular/core';
import { ToastType } from "../../../../shared/enums/toast/toast.enum";

@Component({
  selector: 'app-partner-registration',
  templateUrl: './partner-registration.component.html',
  styleUrls: ['./partner-registration.component.scss']
})
export class PartnerRegistrationComponent {

  protected readonly ToastType = ToastType;
}
