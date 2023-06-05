import { Component } from '@angular/core';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrls: ['./exploration.component.scss']
})
export class ExplorationComponent {

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

  readonly scriptExploration: string = `
    <!--
    Los atributos subscription-key, amount y logo-url son
    requeridos
    -->
    <split-payment-exploration
      subscription-key="__SUBSCRIPTION_KEY__"
      amount="1200"
      logo-url="__IMG_URL__"
      currency="PEN"> <!-- parámetro (currency) opcional -->
    </split-payment-exploration>
  `;

  readonly scriptExplorationLogo: string = `
    <split-payment-exploration
      logo-url="https://tudominio.pe/assets/logo.png">
    </split-payment-exploration>
  `;

  readonly scriptExplorationColorButton: string = `
    <split-payment-exploration
      button-color="white">
    </split-payment-exploration>
  `;

  readonly scriptExplorationAlternative: string = `
    <split-payment-exploration
      use-model="B">
    </split-payment-exploration>
  `;


}
