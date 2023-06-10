import { Component } from '@angular/core';

@Component({
  selector: 'app-integration-api',
  templateUrl: './integration-api.component.html',
  styleUrls: ['./integration-api.component.scss']
})
export class IntegrationApiComponent {

  readonly header: string = `
    {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "__SUBSCRIPTION_KEY__", // Credencial enviada por Interbank
      "X-Correlation-Id": "__CORRELATION_ID__", // Correlativo (Valor aleatorio)
      "X-Api-Force-Sync": "true",
      "X-Api-Version": "v3"
    }
  `;

  readonly body: string = `
    {
      "simulation": {
          "amount": 500
      }
    }
  `;

  readonly response: string = `
    {
      "simulation": {
        "amount": 500,
        "interestRate": 35.0,
        "options": [
          {
              "months": 4,
              "quota": 136.95,
              "interestPaid": 47.8,
              "interestRate": 35,
              "totalPaid": 547.8
          },
          {
              "months": 8,
              "quota": 71.9,
              "interestPaid": 75.2,
              "interestRate": 35,
              "totalPaid": 575.2
          },
          {
              "months": 12,
              "quota": 50.28,
              "interestPaid": 103.36,
              "interestRate": 35,
              "totalPaid": 603.36
          }
        ]
      }
    }
  `;
}
