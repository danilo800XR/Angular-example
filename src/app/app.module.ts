import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapGridComponent } from './components/bootstrap-grid/bootstrap-grid.component';
import { BootstrapColorsComponent } from './components/bootstrap-colors/bootstrap-colors.component';
import { BootstrapSpacingComponent } from './components/bootstrap-spacing/bootstrap-spacing.component';
import { BootstrapDisplayComponent } from './components/bootstrap-display/bootstrap-display.component';
import { BootstrapFlexComponent } from './components/bootstrap-flex/bootstrap-flex.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFormComponent } from './components/material-form/material-form.component';

// Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    BootstrapGridComponent,
    BootstrapColorsComponent,
    BootstrapSpacingComponent,
    BootstrapDisplayComponent,
    BootstrapFlexComponent,
    MaterialFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
