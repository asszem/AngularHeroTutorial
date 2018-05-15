import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroesInMemory'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  getHeroesFromService(): Observable<Hero[]> { // return type is an Observable for Hero[] array
    console.log('getHeroesFromService Called');
    this.http.get<Hero[]>(this.heroesUrl).subscribe(heroes => heroes.forEach(
      currentHero => console.log(currentHero.id + ' ' + currentHero.name + ' ' + currentHero.weapon)));
    this.log('HeroService: fetched all heroes ');
    // Asynchronous signature, that returns a mock hero as an Observable, using RxJS of() function
    // return of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value

    // http property is a HttpClient type that will return an Observable<Hero[]>
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getASpecificHero(id: number): Observable<Hero> { // return type is a single Hero object
    this.log(`HeroService: served a specific hero with ID: ${id}`); // using alt-7 backtip for js template literal
    // RxJS of() function to retunr an array of mock heroes
    // return of(HEROES.find(currentHero => currentHero.id === id));

    // TODO fix this
    return this.http.get<Hero>(this.heroesUrl);
  }
}

