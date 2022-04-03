import { SignInComponent } from './sign-in/sign-in.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Page404Component } from './page404/page404.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'home_page', component: HomePageComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'games_page', component: GamesPageComponent},
  {path: 'sign_in', component: SignInComponent},
  {path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
