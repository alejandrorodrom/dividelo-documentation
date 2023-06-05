import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ROUTES_DIVIDELO } from './dividelo.routing';
import { RouterModule } from "@angular/router";
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { IntegrationComponent } from './pages/integration/integration.component';
import { SharedModule } from "../../shared/shared.module";
import { PhaseComponent } from './pages/integration/tabs/phase/phase.component';
import { FrontStepsComponent } from './pages/integration/tabs/front-steps/front-steps.component';
import {
  IntegrationComponentComponent
} from './pages/integration/tabs/integration-component/integration-component.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { VersionTwoComponent } from './pages/sandbox/versions/version-two/version-two.component';
import { VersionOneComponent } from './pages/sandbox/versions/version-one/version-one.component';
import { PayInThreeComponent } from './pages/sandbox/versions/pay-in-three/pay-in-three.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    IntroductionComponent,
    ExperienceComponent,
    ResourcesComponent,
    IntegrationComponent,
    PhaseComponent,
    FrontStepsComponent,
    IntegrationComponentComponent,
    SandboxComponent,
    VersionTwoComponent,
    VersionOneComponent,
    PayInThreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_DIVIDELO),
    SharedModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ]
})
export class DivideloModule {
}
