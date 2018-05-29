// tslint:disable:max-line-length
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroesInMemory'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) { // parameters: 'opeartion' value is set, 'result' is optional
    return (error: any): Observable<T> => { // 'error' parameter can be any type. The return is an Observable of type T
      console.error(error); // log to console
      this.log(`${operation} failed: ${error.message}`); // log to the message service
      return of(result as T); // return an empty result as Observable (when empty argument is provided)
    };
  }

  /** GET: get all heroes from the server */
  getHeroesFromService(): Observable<Hero[]> { // return type is an Observable for Hero[] array
    console.log('getHeroesFromService Called');

    // this.http.get<Hero[]>(this.heroesUrl).subscribe(heroes => heroes.forEach(
    // currentHero => console.log(`Hero added to list: ${currentHero.id} ${currentHero.name} ${currentHero.weapon}`)));

    // Asynchronous signature, that returns a mock hero as an Observable, using RxJS of() function
    // return of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value

    // http property is a HttpClient type that will return an Observable<Hero[]>
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        // 'tap' Operator looks at the observable values, does something and passes them along.
        // The 'tap' callback doesen't touch the values themselves
        tap(heroesFetched => {
          this.log('HeroService: fetched all heroes');
          // heroesFetched.forEach(currentHero => this.log('tap message: Fetched Hero: ' + currentHero.name));
          heroesFetched.forEach(currentHero => console.log(`Hero added to list: ${currentHero.id} ${currentHero.name} ${currentHero.weapon}`));
        }
        ),
        // catchError operator intercepts an Observable that failed
        catchError(this.handleError('Operation getHeroesFromService encountered an error', [])) // the second parameter is empty array which will be the result
      );
  }

  /** GET: get a specific hero from the server */
  getASpecificHero(id: number): Observable<Hero> { // return type is a single Hero object
    console.log('HeroService: getASpecificHero called');
    this.log(`served a specific hero with ID: ${id}`); // using alt-7 backtip for js template literal
    // RxJS of() function to retunr an array of mock heroes
    // return of(HEROES.find(currentHero => currentHero.id === id));

    const urlWithID = `${this.heroesUrl}/${id}`; // construct the url for web api with the provided 'id'
    console.log(`URL constructed: ${urlWithID}`);
    return this.http.get<Hero>(urlWithID).pipe(
      tap(_ => this.log(`tap message: fetched Hero with id=${id}`)), // _ before arrow is the same as () -> empty parameter
      catchError(this.handleError<Hero>(`Operation getASpecificHero encountered an error. ID=${id}`))
    ); // End of pipe
  } // End of getASpecificHero


  /** PUT: update the hero on the server */
  updateHero(heroToBeUpdated: Hero): Observable<any> { // Return type of Observable is any, why any?
    console.log('HeroService: updateHero called');
    // The heroes web API expects a special header in HTTP save requests. That header is in the httpOptions constant defined in the HeroService.
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.heroesUrl, heroToBeUpdated, httpOptions).pipe(
      tap(_ => this.log(`Hero updated id=${heroToBeUpdated.id} name=${heroToBeUpdated.name}`)),
      catchError(this.handleError<any>('updateHeror method error'))
    ); // End of pipe
  }

  /** POST: add a new hero to the server */
  addHero(newHero: Hero): Observable<Hero> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Hero>(this.heroesUrl, newHero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`HeroService: added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    ); // End of pipe
  }

  /** DELETE: delete the hero from the server */
  deleteHero(heroToDelete: Hero | number): Observable<Hero> {
    console.log(typeof heroToDelete);
    const id = typeof heroToDelete === 'number' ? heroToDelete : heroToDelete.id; // if ID was provided, then id should be the value of id
    console.log(`deleteHero id constructed=${id} `);
    const url = `${this.heroesUrl}/${id}`;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`HeroService: deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
}

