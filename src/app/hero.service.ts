import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  // Synchronous method that retunrs the heroes array instantly
  // getHeroes(): Hero[] { // return type is Hero[] array 
  //   return HEROES;
  // }

  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  //  method      return type         body
  getHeroesFromService(): Observable<Hero[]> {
    return of(HEROES);  // 'of' is imported from RxJS
  }

}
