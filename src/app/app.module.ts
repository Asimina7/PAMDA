import { HttpClientModule } from '@angular/common/http';
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
import { OurGamesComponent } from './our-games/our-games.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { Page404Component } from './page404/page404.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FormsModule } from '@angular/forms';
import { OurgameComponent } from './ourgame/ourgame.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { LatestReleasesComponent } from './latest-releases/latest-releases.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { DetailsComponent } from './details/details.component';
import { CategoriesSidebarComponent } from './categories-sidebar/categories-sidebar.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    FeaturesComponent,
    RegisterFormComponent,
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
    DetailsComponent,
    CategoriesSidebarComponent,
    GamesPageComponent,
    SignInComponent,
    DetailsPageComponent,
    ProfileComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxStepperModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxIconModule,
    NgbModule,  
    IgxAccordionModule, 
    IgxSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
