import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ROUTES_DIVIDELO } from './dividelo.routing';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_DIVIDELO)
  ]
})
export class DivideloModule { }
