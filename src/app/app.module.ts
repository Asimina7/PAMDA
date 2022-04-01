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
import { IgxAccordionModule} from 'igniteui-angular';
import { IgxSwitchModule } from "igniteui-angular";
import { FooterComponent } from './footer/footer.component';
import { OurGamesComponent } from './our-games/our-games.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { Page404Component } from './page404/page404.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { IgxStepperModule } from 'igniteui-angular';

import { 
	IgxButtonModule,
	IgxButtonGroupModule
 } from "igniteui-angular";
import { FormsModule } from '@angular/forms';
import { OurgameComponent } from './ourgame/ourgame.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { LatestReleasesComponent } from './latest-releases/latest-releases.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    FeaturesComponent,
    ImageComponent,
    FaqComponent,
    FooterComponent,
    OurGamesComponent,
    IndexPageComponent,
    Page404Component,
    HomeImageComponent,
    HomePageComponent,
    HomeHeaderComponent,
    OurgameComponent,
    MostPopularComponent,
    LatestReleasesComponent,
    RecommendedComponent,
    TopRatedComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    BrowserAnimationsModule, 
    IgxAccordionModule, 
    IgxSwitchModule,
    HttpClientModule,
    IgxStepperModule,
    IgxButtonModule,
    IgxButtonGroupModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
