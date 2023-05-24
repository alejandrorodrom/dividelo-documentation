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
  }
];
