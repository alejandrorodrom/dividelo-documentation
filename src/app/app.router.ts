import { Routes } from "@angular/router";

export const ROUTES_APP: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dividelo'
  },
  {
    path: 'dividelo',
    loadChildren: () => import('./features/dividelo/dividelo.module').then(m => m.DivideloModule),
  },
  {
    path: 'cuenta-simple',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'general',
    loadChildren: () => import('./features/general/general.module').then(m => m.GeneralModule),
  }
];
