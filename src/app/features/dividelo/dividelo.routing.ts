import { Routes } from '@angular/router';
import { IntroductionComponent } from "./pages/introduction/introduction.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ResourcesComponent } from "./pages/resources/resources.component";
import { IntegrationComponent } from "./pages/integration/integration.component";
import { SandboxComponent } from "./pages/sandbox/sandbox.component";

export const ROUTES_DIVIDELO: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'integracion'
  },
  {
    path: 'introduccion',
    component: IntroductionComponent
  },
  {
    path: 'experiencia',
    component: ExperienceComponent
  },
  {
    path: 'recursos',
    component: ResourcesComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'integracion',
    component: IntegrationComponent
  }
];
