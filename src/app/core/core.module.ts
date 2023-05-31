import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { SharedModule } from "../shared/shared.module";
import { RouterLink, RouterLinkActive } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent
  ],
  exports: [
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SharedModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class CoreModule { }
