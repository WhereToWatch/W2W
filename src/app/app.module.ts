import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisneyComponent } from './components/disney/disney.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixComponent } from './components/netflix/netflix.component';
import { PrimeComponent } from './components/prime/prime.component';
import { SkyComponent } from './components/sky/sky.component';
import { DisneyHomeComponent } from './components/home/components/disney-home/disney-home.component';
import { NetflixHomeComponent } from './components/home/components/netflix-home/netflix-home.component';
import { PrimeHomeComponent } from './components/home/components/prime-home/prime-home.component';
import { SkyHomeComponent } from './components/home/components/sky-home/sky-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BillboardComponent,
    ContactComponent,
    DisneyComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NetflixComponent,
    PrimeComponent,
    SkyComponent,
    DisneyHomeComponent,
    NetflixHomeComponent,
    PrimeHomeComponent,
    SkyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
