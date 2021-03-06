import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { AuthComponent } from './main-page/auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { InventoryComponent } from './main-page/inventory/inventory.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LandingPageComponent } from './main-page/landing-page/landing-page.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [
    AppComponent,
    // AuthComponent,
    NavBarComponent,
    InventoryComponent,
    MainPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// npm install @aws-amplify/ui-angular
