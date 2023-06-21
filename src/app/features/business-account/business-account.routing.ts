import { Routes } from "@angular/router";
import { IntroductionComponent } from "./pages/introduction/introduction.component";
import { NaturalPersonFlowComponent } from "./pages/natural-person-flow/natural-person-flow.component";
import { LegalEntityFlowComponent } from "./pages/legal-entity-flow/legal-entity-flow.component";
import { SandboxComponent } from "./pages/sandbox/sandbox.component";

export const ROUTES_BUSINESS_ACCOUNTS: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'introduction'
  },
  {
    path: 'introduccion',
    component: IntroductionComponent
  },
  {
    path: 'flujo-persona-natural',
    component: NaturalPersonFlowComponent
  },
  {
    path: 'flujo-persona-juridica',
    component: LegalEntityFlowComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
];
