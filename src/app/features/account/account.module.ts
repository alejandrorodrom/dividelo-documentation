import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ROUTES_ACCOUNTS } from "./account.routing";
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { SharedModule } from "../../shared/shared.module";
import { FlowComponent } from './pages/flow/flow.component';
import { PersonalizationComponent } from './pages/personalization/personalization.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    IntroductionComponent,
    FlowComponent,
    PersonalizationComponent,
    SandboxComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_ACCOUNTS),
    SharedModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AccountModule { }
