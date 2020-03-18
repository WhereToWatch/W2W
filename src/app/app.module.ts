import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecodeHtmlEntitiesModule } from 'decode-html-entities';
import { HTMLEscapeUnescapeModule } from 'html-escape-unescape';
import { APP_BASE_HREF } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    HTMLEscapeUnescapeModule,DecodeHtmlEntitiesModule

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

