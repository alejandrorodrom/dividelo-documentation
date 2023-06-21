import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  readonly scriptModule: string = `
    <!--
    Este script debería ubicarse al final del documento
    dentro de la etiqueta <body> para no bloquear la carga
    de la página.
    -->
    <script
      type="module"
      src="https://web-qa.digital.interbank.pe/bindings/js/accounts@0.0.1/ibk-account/ibk-account.esm.js">
    </script>
  `;

  readonly scriptComponent: string = `
    <!-- Botón de apertura de cuenta -->
    <ibk-account
      jwt="__JWT__"
      commerce-id="__COMMERCE_ID__"
      subscription-key="__SUBSCRIPTION_KEY__">
    </ibk-account>
  `;

  readonly scriptCustomEvent: string = `
    <ibk-account id="account-wc"></ibk-account>

    <script>
      const element = document.getElementById('account-wc');

      element.addEventListener('accountCreated', event => {
        // El objeto emitido dentro del detalle del evento
        console.log(event.detail);
        // {
        //   accountCorrelationId: 'correlation-id',
        //   accountDataSharing: true,
        //   cci: 'account-cci',
        //   accountId: 'account-id',
        // }
      });
    </script>
  `;

  readonly scriptCurlCorrelation: string = `
    curl --location --request POST 'https://apiqa.digital.interbank.pe/applications/v1/correlations/{correlationId}' \\
    --header 'Content-Type: application/json' \\
    --header 'Ocp-Apim-Subscription-Key: __SUBSCRIPTION_KEY__' \\
    --header 'Authorization: Bearer __JWT__'
  `;

  readonly scriptCorrelationResponse: string = `
    {
      "correlation": {
        "status": "SETTLED | "FAILED",
        "data": {
          "account": {
            "type": "SAVING",
            "subType": "CUENTA_SIMPLE",
            "currency": "USD" | "PEN",
            "customer": {
              "identityDocument": [
                {
                  "type": "DNI",
                  "number": "__CUSTOMER_DNI__"
                }
              ],
              "id": "__CUSTOMER_ID__"
            },
            "id": "__ACCOUNT_ID__"
          },
          "validationType": "KBA",
          "hasDebitCardAssignment": true
        },
        "id": "__CORRELATION_ID__"
      }
    }
  `;

}
