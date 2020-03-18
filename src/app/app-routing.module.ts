import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NetflixComponent } from './components/netflix/netflix.component';
import { PrimeComponent } from './components/prime/prime.component';
import { DisneyComponent } from './components/disney/disney.component';
import { SkyComponent } from './components/sky/sky.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'netflix',
    component: NetflixComponent
  },
  {
    path: 'prime',
    component: PrimeComponent
  },
  {
    path: 'disney+',
    component: DisneyComponent
  },
  {
    path: 'skyx',
    component: SkyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
