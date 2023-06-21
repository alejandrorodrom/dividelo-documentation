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
      src="https://web-qa.digital.interbank.pe/bindings/js/business-account@0.0.1/main.js">
    </script>
  `;

  readonly scriptComponent: string = `
    <!-- Botón de apertura de cuenta negocio-->
    <ibk-business-accounts
      trigger-model="C"
      document-number="44386667"
      company-document-number="2000398833"
      session-token="__SESSION_TOKEN_VALUE__"
      subscription-key="__SUBSCRIPTION_KEY_VALUE__"
    </ibk-business-accounts>
  `;

  readonly scriptCustomEvent: string = `
    <ibk-business-accounts  id="account-business-wc"></ibk-business-accounts>

    <script>
      const element = document.getElementById('account-business-wc');

      element.addEventListener('accountCreated', event => {
        // El objeto emitido dentro del detalle del evento
        console.log(event.detail);
        // [{
        //   accountCorrelationId: "pg-1678740476800-53"
        //   accountId:"8987003445035"
        //   currency:"PEN"
        //   status:"SETTLED"
        // }]
      });
    </script>
  `;

  readonly scriptSessionToken: string = `
    curl --location --request POST 'https://apiqa.digital.interbank.pe/bff-security/v1/bff-security/oauth/token' \\
    --header 'Content-Type: application/json' \\
    --header 'Ocp-Apim-Subscription-Key: __SUBSCRIPTION_KEY__' \\
    --header 'Authorization: Basic __APPLICATION_CREDENTIALS__'
  `;

  readonly scriptSessionTokenResponse: string = `
    {
      "access_token": "MjRiNWRhMTQtYzk4OC00YTFkLTkxYTctYWRlY2ZhNDkzYmE1", // Valor usado en el atributo session-token
      "token_type": "SESSION",
      "creation_time": "2022-10-21 14:51",
      "expires_in": 300
    }
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
            "status": "SETTLED" | "FAILED",
            "id": "__CORRELATION_ID_",
            "data": {
                "accounts": [
                    {
                        "financialInstitution": "INTERBANK",
                        "type": "CHECKING",
                        "subType": "CTA_CTE_NEGOCIOS_PNN",
                        "currency": "PEN",
                        "customer": {
                            "id": "__CUSTOMER_ID__"
                        },
                        "id": "__ACCOUNT_ID__",
                    }
                ],
                "customer": {
                    "firstName": "MORELIA",
                    "lastName": "CORDOVA",
                    "motherLastName": "PIMENTEL",
                    "email": [
                        {
                            "value": "CHRISTIAN_17_07@HOTMAIL.COM"
                        }
                    ],
                    "birthDate": "1983-08-03",
                    "residenceCountry": "PE",
                    "nationality": "PE",
                    "identityDocument": [
                        {
                            "type": "DNI",
                            "number": "76389974"
                        }
                    ],
                    "address": [
                        {
                            "country": "PE",
                            "department": "LIMA",
                            "province": "LIMA",
                            "district": "SURCO",
                            "streetType": "SHRED",
                            "streetName": "GARCILASO DE LA VEGA",
                            "streetNumber": "100",
                            "block": "",
                            "lot": "",
                            "apartment": "",
                            "neighborhood": "",
                            "landmark": ""
                        }
                    ],
                    "phone": [
                        {
                            "type": "MOBILE",
                            "number": "935845155",
                            "carrier": "BITEL"
                        }
                    ],
                    "gender": "FEMALE",
                    "maritalStatus": "DIVORCED",
                    "ldpd": {
                        "accepted": true
                    },
                    "employment": {
                        "employer": {
                            "name": null,
                            "startDate": null,
                            "address": null,
                            "phone": null
                        }
                    },
                    "id": "0060654640"
                },
                "store": {
                    "storeCode": "898"
                },
                "agency": {
                    "code": "01",
                    "name": "Lima"
                },
                "validationType": "KBA",
                "originId": "192.168.0.1",
                "tariff": "DIGITAL"
            },
            "id": "pg-1234263243328-18"
        }
    }
  `;
}
