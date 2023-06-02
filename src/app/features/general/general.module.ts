import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationStylesComponent } from './pages/configuration-styles/configuration-styles.component';
import { RouterModule } from "@angular/router";
import { ROUTES_GENERAL } from "./general.routing";
import { SharedModule } from "../../shared/shared.module";
import { PartnerRegistrationComponent } from './pages/partner-registration/partner-registration.component';


@NgModule({
  declarations: [
    ConfigurationStylesComponent,
    PartnerRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_GENERAL),
    SharedModule
  ]
})
export class GeneralModule { }
