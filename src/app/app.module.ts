import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { E1Component } from './components/e1/e1/e1.component';
import { EComponent } from './components/e/e/e.component';
import { E3Component } from './components/e3/e3/e3.component';

@NgModule({
  declarations: [AppComponent, E1Component, EComponent, E3Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
