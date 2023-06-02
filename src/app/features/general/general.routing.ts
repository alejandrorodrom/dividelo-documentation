import { Routes } from "@angular/router";
import { ConfigurationStylesComponent } from "./pages/configuration-styles/configuration-styles.component";
import { PartnerRegistrationComponent } from "./pages/partner-registration/partner-registration.component";

export const ROUTES_GENERAL: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'configuracion-estilos'
  },
  {
    path: 'registro-socio',
    component: PartnerRegistrationComponent
  },
  {
    path: 'configuracion-estilos',
    component: ConfigurationStylesComponent
  },
];
