import { DetailsPageComponent } from './details-page/details-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page404Component } from './page404/page404.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'home_page', component: HomePageComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'games_page', component: GamesPageComponent},
  {path: 'sign_in', component: SignInComponent},
  {path: 'register_page', component: RegisterFormComponent},
  {path: 'details_page', component: DetailsPageComponent},
  {path: '**', component: Page404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'top'}) ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
