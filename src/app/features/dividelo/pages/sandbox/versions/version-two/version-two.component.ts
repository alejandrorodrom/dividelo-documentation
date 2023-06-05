import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Select } from "../../../../../../shared/interfaces/select/select.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-version-two',
  templateUrl: './version-two.component.html',
  styleUrls: ['./version-two.component.scss']
})
export class VersionTwoComponent {

  slicePaymentV2: FormGroup;

  readonly componentOptions: Select[] = [
    {
      label: 'Exploración (Inicio)',
      value: 'exploration',
      selected: true
    },
    {
      label: 'Previo al pago (Producto)',
      value: 'previous'
    },
    {
      label: 'Toma de decisión (Carrito)',
      value: 'decision'
    }
  ];

  readonly modelOptions: Select[] = [
    {
      label: 'A',
      value: 'A',
      selected: true
    },
    {
      label: 'B',
      value: 'B'
    }
  ];

  readonly colorOptions: Select[] = [
    {
      label: 'Azul',
      value: 'blue',
      selected: true
    },
    {
      label: 'Blanco',
      value: 'white'
    }
  ];

  readonly currencyOptions: Select[] = [
    {
      label: 'Soles',
      value: 'PEN',
      selected: true
    },
    {
      label: 'Dolares',
      value: 'USD'
    }
  ];

  @ViewChild('webComponent') content!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
    this.slicePaymentV2 = new FormGroup({
      component: new FormControl(this.componentOptions[0].value, [Validators.required]),
      subscriptionKey: new FormControl('', [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      logo: new FormControl('', []),
      model: new FormControl(this.modelOptions[0].value, []),
      buttonColor: new FormControl(this.colorOptions[0].value, []),
      currency: new FormControl(this.currencyOptions[0].value, [Validators.required]),
      mediumEmphasis: new FormControl(false, [Validators.required]),
      grayScale: new FormControl(false, [Validators.required]),

      primaryColor: new FormControl('#05BE50', [Validators.required]),
      secondaryColor: new FormControl('#0039A6', [Validators.required]),
      accentColor: new FormControl('#F44336', [Validators.required]),
      regularTypography: new FormControl('', []),
      mediumTypography: new FormControl('', []),
      boldTypography: new FormControl('', [])
    });
  }

  generateWebComponent(): void {
    const slicePaymentChild = this.content.nativeElement.children[0];
    if (slicePaymentChild) {
      this.renderer.removeChild(this.content.nativeElement, slicePaymentChild);
    }

    const component = this.slicePaymentV2.value['component'];

    const webComponent = this.renderer.createElement(this.nameWebComponent(component));
    webComponent.setAttribute('subscription-key', this.slicePaymentV2.value['subscriptionKey']);
    webComponent.setAttribute('amount', this.slicePaymentV2.value['amount']);
    webComponent.setAttribute('logo-url', this.slicePaymentV2.value['logo']);

    if (component == 'exploration' || component == 'previous') webComponent.setAttribute('use-model', this.slicePaymentV2.value['model']);
    if (component == 'exploration' && this.slicePaymentV2.value['model'] === 'A') webComponent.setAttribute('button-color', this.slicePaymentV2.value['buttonColor']);

    webComponent.setAttribute('currency', this.slicePaymentV2.value['currency']);

    if (component == 'previous' || this.slicePaymentV2.value['model'] === 'A') {
      webComponent.setAttribute('medium-brand', this.slicePaymentV2.value['mediumEmphasis']);
      webComponent.setAttribute('interbank-black', this.slicePaymentV2.value['grayScale']);
    }

    webComponent.setAttribute('primary', this.slicePaymentV2.value['primaryColor']);
    webComponent.setAttribute('secondary', this.slicePaymentV2.value['secondaryColor']);
    webComponent.setAttribute('accent', this.slicePaymentV2.value['accentColor']);
    webComponent.setAttribute('regular-typography', this.slicePaymentV2.value['regularTypography']);
    webComponent.setAttribute('medium-typography', this.slicePaymentV2.value['mediumTypography']);
    webComponent.setAttribute('bold-typography', this.slicePaymentV2.value['boldTypography']);

    this.renderer.appendChild(this.content.nativeElement, webComponent);
  }

  private nameWebComponent(component: string): string {
    switch (component) {
      case 'exploration': {
        return 'split-payment-exploration';
      }
      case 'previous': {
        return 'split-payment-previous';
      }
      case 'decision': {
        return 'split-payment-decision';
      }
      default: {
        return 'split-payment-exploration';
      }
    }
  }
}
