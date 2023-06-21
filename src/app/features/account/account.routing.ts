import { Routes } from "@angular/router";
import { IntroductionComponent } from "./pages/introduction/introduction.component";
import { FlowComponent } from "./pages/flow/flow.component";
import { PersonalizationComponent } from "./pages/personalization/personalization.component";
import { SandboxComponent } from "./pages/sandbox/sandbox.component";
import { MobileComponent } from "./pages/mobile/mobile.component";

export const ROUTES_ACCOUNTS: Routes = [
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
    path: 'flujo',
    component: FlowComponent
  },
  {
    path: 'personalizacion',
    component: PersonalizationComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'app-moviles',
    component: MobileComponent
  }
];
