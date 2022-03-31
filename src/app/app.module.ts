import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexHeaderComponent } from './index-header/index-header.component';
import { FeaturesComponent } from './features/features.component';
import { ImageComponent } from './image/image.component';
import { FaqComponent } from './faq/faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { createPopper } from '@popperjs/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAccordionModule } from 'igniteui-angular';
import { IgxSwitchModule } from "igniteui-angular";
import { FooterComponent } from './footer/footer.component';
import { OurGamesComponent } from './our-games/our-games.component';
import { IndexPageComponent } from './index-page/index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    FeaturesComponent,
    ImageComponent,
    FaqComponent,
    FooterComponent,
    OurGamesComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    BrowserAnimationsModule, 
    IgxAccordionModule, 
    IgxSwitchModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
