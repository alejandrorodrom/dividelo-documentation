import { Routes } from "@angular/router";
import { ConfigurationStylesComponent } from "./pages/configuration-styles/configuration-styles.component";

export const ROUTES_GENERAL: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'configuracion-estilos'
  },
  {
    path: 'configuracion-estilos',
    component: ConfigurationStylesComponent
  },
];
