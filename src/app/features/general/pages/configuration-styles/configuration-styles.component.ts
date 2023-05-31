import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration-styles',
  templateUrl: './configuration-styles.component.html',
  styleUrls: ['./configuration-styles.component.scss']
})
export class ConfigurationStylesComponent {
  readonly scriptColors: string = `
  <component-name
    primary="#DB9800"
    secondary="#0048DB"
    accent="#f44336">
  </component-name>
  `;

  readonly scriptTypographyCss: string = `
  @font-face {
    font-family: "Nombre-De-La-Fuente-Regular";
    src: url(direcion/a/tu/fuente/Geometria.ttf);
  }

  @font-face {
    font-family: "Nombre-De-La-Fuente-Bold";
    src: url(direcion/a/tu/fuente/Geometria-Bold.ttf);
  }

  @font-face {
    font-family: "Nombre-De-La-Fuente-Medium";
    src: url(direcion/a/tu/fuente/Geometria-Medium.ttf);
  }
  `;

  readonly scriptTypography: string = `
  <component-name
    regular-typography="Nombre-De-La-Fuente-Regular"
    medium-typography="Nombre-De-La-Fuente-Medium"
    bold-typography="Nombre-De-La-Fuente-Bold">
  </component-name>
  `;
}
