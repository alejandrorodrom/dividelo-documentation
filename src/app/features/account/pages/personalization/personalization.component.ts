import { Component } from '@angular/core';

@Component({
  selector: 'app-personalization',
  templateUrl: './personalization.component.html',
  styleUrls: ['./personalization.component.scss']
})
export class PersonalizationComponent {

  readonly scriptBusinessName: string = `
    <ibk-account
      business-name="Mi Negocio">
    </ibk-account>
  `;

  readonly scriptLogo: string = `
    <ibk-account
      logo-url="https://tudominio.pe/assets/logo.png">
    </ibk-account>
  `;

  readonly scriptPersonalization: string = `
    <style>
      .my-custom-btn {
        transition: .2s;
        border: 0;
        border-radius: 8px;
        background-color: orange;
        cursor: pointer;
        padding: 20px 30px;
        color: white;
        font-size: 16px;
      }

      .my-custom-btn:hover {
        transform: scale(1.1);
      }
    </style>

    <ibk-account custom-btn>
      <button class="my-custom-btn">
        ¡Abre tu cuenta Interbank!
      </button>
    </ibk-account>
  `;

  readonly scriptInline: string = `
    <ibk-account inline></ibk-account>
  `;

  readonly scriptAutocomplete: string = `
    <body>
      <ibk-account id="account-creation-component"></ibk-account>

      <script>
        (async () => {
          await customElements.whenDefined('ibk-account');
          const elem = document.getElementById('account-creation-component');
          elem.autocompleteData = {
            documentNumber: '12345678',
            residenceCountry: 'PE',
            birthCountry: 'PE',
            nationality: 'PE',
            email: 'user@email.com',
            phoneNumber: '474836534',
            streetName: 'Calle San Antonio',
            streetNumber: '3424',
            block: 'A',
            lot: '2',
            apartment: '502',
            lockOnAutocomplete: true
          };
        })();
      </script>
    </body>
  `;
}
