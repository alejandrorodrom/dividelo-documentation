import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTES_APP } from "./app.router";
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(ROUTES_APP)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
