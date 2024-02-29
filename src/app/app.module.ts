import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E1Component } from './components/e1/e1/e1.component';
import { EComponent } from './components/e/e/e.component';

@NgModule({
  declarations: [
    AppComponent,
    E1Component,
    EComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
