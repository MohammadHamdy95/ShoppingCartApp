import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
