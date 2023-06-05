import { Component } from '@angular/core';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent {

  readonly scriptModule: string = `
    <!--
    Este script debería ubicarse al final del documento
    dentro de la etiqueta <body> para no bloquear la carga
    de la página.
    -->
    <script
      type="module"
      src="https://web-qa.digital.interbank.pe/bindings/js/slice-payment-multiple@0.0.1/split-payment-multiple/split-payment-multiple.esm.js">
    </script>
  `;

  readonly scriptPrevious: string = `
    <!--
      Los atributos subscription-key, amount y logo-url son
      requeridos
    -->
    <split-payment-previous
      subscription-key="__SUBSCRIPTION_KEY__"
      amount="1200"
      logo-url="__IMG_URL__"
      currency="PEN"> <!-- parámetro (currency) opcional -->
    </split-payment-previous>
  `;

  readonly scriptPreviousLogo: string = `
    <split-payment-previous
      logo-url="https://tudominio.pe/assets/logo.png">
    </split-payment-previous>
  `;

  readonly scriptPreviousAlternative: string = `
    <split-payment-previous
      use-model="B">
    </split-payment-previous>
  `;

  readonly scriptPreviousMedium: string = `
    <split-payment-previous
      medium-brand>
    </split-payment-previous>
  `;

  readonly scriptPreviousBlack: string = `
    <split-payment-previous
      interbank-black>
    </split-payment-previous>
  `;

}
