import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'; // for NgModel


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSandboxComponent } from './hero-sandbox/hero-sandbox.component'; // imported by the CLI automatically
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSandboxComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // tslint:disable-next-line:max-line-length
  providers: [ // The providers array tells Angular to create a single, shared instance of HeroService and inject into any class that asks for it.
    HeroService, MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
