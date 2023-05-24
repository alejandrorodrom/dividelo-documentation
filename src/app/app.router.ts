import { Routes } from "@angular/router";

export const ROUTES_APP: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/dividelo/dividelo.module').then(m => m.DivideloModule),
  }
];
