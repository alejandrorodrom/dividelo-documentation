import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ROUTES_DIVIDELO } from './dividelo.routing';
import { RouterModule } from "@angular/router";
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { IntegrationComponent } from './pages/integration/integration.component';


@NgModule({
  declarations: [
    IntroductionComponent,
    ExperienceComponent,
    ResourcesComponent,
    IntegrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_DIVIDELO)
  ]
})
export class DivideloModule { }
