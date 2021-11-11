import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapGridComponent } from './components/bootstrap-grid/bootstrap-grid.component';
import { BootstrapColorsComponent } from './components/bootstrap-colors/bootstrap-colors.component';
import { BootstrapSpacingComponent } from './components/bootstrap-spacing/bootstrap-spacing.component';
import { BootstrapDisplayComponent } from './components/bootstrap-display/bootstrap-display.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapGridComponent,
    BootstrapColorsComponent,
    BootstrapSpacingComponent,
    BootstrapDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
