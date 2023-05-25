import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavGroupComponent } from './components/nav-group/nav-group.component';
import { RouterLink } from "@angular/router";



@NgModule({
    declarations: [
        NavGroupComponent
    ],
    exports: [
        NavGroupComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ]
})
export class SharedModule { }
