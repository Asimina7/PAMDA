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

import { ImageComponent } from './image/image.component';
import { FaqComponent } from './faq/faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { createPopper } from '@popperjs/core';
import { IgxAccordionModule } from 'igniteui-angular';
import { IgxSwitchModule } from "igniteui-angular";
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    FeaturesComponent,
    RegisterFormComponent,
    ImageComponent,
    FaqComponent,
    FooterComponent,
    HomeHeaderComponent
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
    NgbModule,  
    IgxAccordionModule, 
    IgxSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
