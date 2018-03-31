import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {
    // this.messageService=messageService;
   }
  getHeroes(): Hero[] { // return type is Hero[] array 
    // TODO send the message AFTER fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }

}
