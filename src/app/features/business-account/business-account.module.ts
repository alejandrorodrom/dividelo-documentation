import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ROUTES_BUSINESS_ACCOUNTS } from "./business-account.routing";
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { SharedModule } from "../../shared/shared.module";
import { NaturalPersonFlowComponent } from './pages/natural-person-flow/natural-person-flow.component';
import { LegalEntityFlowComponent } from './pages/legal-entity-flow/legal-entity-flow.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    IntroductionComponent,
    NaturalPersonFlowComponent,
    LegalEntityFlowComponent,
    SandboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_BUSINESS_ACCOUNTS),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BusinessAccountModule { }
