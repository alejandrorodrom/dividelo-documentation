import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Select } from "../../../../shared/interfaces/select/select.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastType } from "../../../../shared/enums/toast/toast.enum";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent {

  businessAccount: FormGroup;

  readonly models: Select[] = [
    {
      label: 'A',
      value: 'A',
      selected: true
    },
    {
      label: 'B',
      value: 'B'
    },
    {
      label: 'C',
      value: 'C'
    }
  ];

  protected readonly ToastType = ToastType;

  @ViewChild('webComponent') content!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
    this.businessAccount = new FormGroup({
      sessionToken: new FormControl('', [Validators.required]),
      subscriptionKey: new FormControl('', [Validators.required]),
      triggerModel: new FormControl(this.models[0].value, []),
      companyDocumentNumber: new FormControl('', [Validators.required]),
      documentNumber: new FormControl('', [Validators.required]),
    });
  }

  generateWebComponent(): void {
    const businessAccountChild = this.content.nativeElement.children[0];
    if (businessAccountChild) {
      this.renderer.removeChild(this.content.nativeElement, businessAccountChild);
    }

    const webComponent = this.renderer.createElement('ibk-business-accounts');
    webComponent.setAttribute('session-token', this.businessAccount.value['sessionToken']);
    webComponent.setAttribute('subscription-key', this.businessAccount.value['subscriptionKey']);
    webComponent.setAttribute('trigger-model', this.businessAccount.value['triggerModel']);
    webComponent.setAttribute('company-document-number', this.businessAccount.value['companyDocumentNumber']);
    webComponent.setAttribute('document-number', this.businessAccount.value['documentNumber']);

    this.renderer.appendChild(this.content.nativeElement, webComponent);
  }

}
