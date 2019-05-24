import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { PersonFormComponent } from './container/person-form/person-form.component';

@NgModule({
  declarations: [AppComponent, AddressFormComponent, PersonalInfoFormComponent, PersonFormComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatSelectModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
