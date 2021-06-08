import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';

const ROUTES: Routes = [

  
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },  
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: '**', pathMatch:'full' , redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
