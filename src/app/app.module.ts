import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapGridComponent } from './bootstrap-grid/bootstrap-grid.component';
import { BootstrapColorsComponent } from './bootstrap-colors/bootstrap-colors.component';
import { BootstrapSpacingComponent } from './bootstrap-spacing/bootstrap-spacing.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapGridComponent,
    BootstrapColorsComponent,
    BootstrapSpacingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
