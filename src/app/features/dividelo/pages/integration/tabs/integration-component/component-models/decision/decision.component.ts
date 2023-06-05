import { Component } from '@angular/core';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss']
})
export class DecisionComponent {

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

  readonly scriptDecision: string = `
    <!--
    Los atributos subscription-key, amount y logo-url son
    requeridos
    -->
    <split-payment-decision
      subscription-key="__SUBSCRIPTION_KEY__"
      amount="1200"
      logo-url="__IMG_URL__"
      currency="PEN"> <!-- parámetro (currency) opcional -->
    </split-payment-decision>
  `;

  readonly scriptDecisionLogo: string = `
    <split-payment-decision
      logo-url="https://tudominio.pe/assets/logo.png">
    </split-payment-decision>
  `;

}
