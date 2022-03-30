import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexHeaderComponent } from './index-header/index-header.component';
import { FeaturesComponent } from './features/features.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
	IgxButtonModule,
	IgxButtonGroupModule,
  IgxStepperModule,
  IgxIconModule
 } from "igniteui-angular";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    FeaturesComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxStepperModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
