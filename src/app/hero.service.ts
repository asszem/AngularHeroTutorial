import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {
    // this.messageService=messageService;
  }

  // Asynchronous signature, that returns a mock hero as an Observable, using RxJS of() function
  getHeroesFromService(): Observable<Hero[]> { // return type is an Observable for Hero[] array
    // TODO send the message AFTER fetching heroes
    const messageText = 'HeroService: fetched all heroes';
    this.messageService.add(messageText);
    console.log(messageText);
    return of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }

  getASpecificHero(id: number): Observable<Hero> { // return type is an Observable of a single Hero object
    // TODO send the message AFTER fetching heroes
    const messageText = `HeroService: served a specific hero with ID: ${id}`;
    this.messageService.add(messageText); // using alt-7 backtip for js template literal
    console.log(messageText);
    return of(HEROES.find(currentHero => currentHero.id === id));
  }
}
