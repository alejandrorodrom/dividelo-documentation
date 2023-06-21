import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent {

  account: FormGroup;

  formAutocomplete: boolean = false

  @ViewChild('webComponent') content!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
    this.account = new FormGroup({
      jwt: new FormControl('', [Validators.required]),
      subscriptionKey: new FormControl('', [Validators.required]),
      commerceId: new FormControl('', [Validators.required]),
      businessName: new FormControl('', []),
      logo: new FormControl('', []),
      inline: new FormControl(false, [Validators.required]),

      primaryColor: new FormControl('#05BE50', [Validators.required]),
      secondaryColor: new FormControl('#0039A6', [Validators.required]),
      accentColor: new FormControl('#F44336', [Validators.required]),
      regularTypography: new FormControl('', []),
      mediumTypography: new FormControl('', []),
      boldTypography: new FormControl('', []),

      documentNumber: new FormControl('', []),
      residenceCountry: new FormControl('', []),
      birthCountry: new FormControl('', []),
      nationality: new FormControl('', []),
      email: new FormControl('', []),
      phoneNumber: new FormControl('', []),
      streetName: new FormControl('', []),
      streetNumber: new FormControl('', []),
      block: new FormControl('', []),
      lot: new FormControl('', []),
      apartment: new FormControl('', []),
      lockOnAutocomplete: new FormControl(false, [])
    });
  }

  generateWebComponent(): void {
    const accountChild = this.content.nativeElement.children[0];
    if (accountChild) {
      this.renderer.removeChild(this.content.nativeElement, accountChild);
    }

    const webComponent = this.renderer.createElement('ibk-account');
    webComponent.setAttribute('id', this.account.value['account-creation-component']);
    webComponent.setAttribute('jwt', this.account.value['jwt']);
    webComponent.setAttribute('subscription-key', this.account.value['subscriptionKey']);
    webComponent.setAttribute('commerce-id', this.account.value['commerceId']);
    webComponent.setAttribute('business-name', this.account.value['businessName']);
    webComponent.setAttribute('logo-url', this.account.value['logo']);
    webComponent.setAttribute('inline', this.account.value['inline']);

    webComponent.setAttribute('primary', this.account.value['primaryColor']);
    webComponent.setAttribute('secondary', this.account.value['secondaryColor']);
    webComponent.setAttribute('accent', this.account.value['accentColor']);
    webComponent.setAttribute('regular-typography', this.account.value['regularTypography']);
    webComponent.setAttribute('medium-typography', this.account.value['mediumTypography']);
    webComponent.setAttribute('bold-typography', this.account.value['boldTypography']);

    webComponent.autocompleteData = {
      documentNumber: this.account.value['documentNumber'],
      residenceCountry: this.account.value['residenceCountry'],
      birthCountry: this.account.value['birthCountry'],
      nationality: this.account.value['nationality'],
      email: this.account.value['email'],
      phoneNumber: this.account.value['phoneNumber'],
      streetName: this.account.value['streetName'],
      streetNumber: this.account.value['streetNumber'],
      block: this.account.value['block'],
      lot: this.account.value['lot'],
      apartment: this.account.value['apartment'],
      lockOnAutocomplete: this.account.value['lockOnAutocomplete']
    };

    this.renderer.appendChild(this.content.nativeElement, webComponent);
  }

  showAutocompleteForm(): void {
    this.formAutocomplete = !this.formAutocomplete;
  }
}
