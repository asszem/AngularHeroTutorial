import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
// import {HEROES } from '../mock-heroes'; -- Heroes not imported anymore, but injected!

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Constructor based Dependency Injection
  // When Angular creates a HeroesComponent, the DI system sets the heroService parameter to the singleton instance of HeroService.
  // Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
  // The constructor shouldn't do anything.
  // It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Declarations
  heroList: Hero[]; // The values will be retrieved from the heroService in the getHeroes() method during onInit()
  // heroSelected: Hero; // The value will be retrieved from the onClick event on a <li> element

  // SYNCHRONOUS CALL
  // This is a synchronous call, expecting the heroservice instant
  // getHeroes(): void {
  // this.heroList = this.heroService.getHeroes();
  // }

  // ASYNCHRNONOUS CALL
  // This asynchronous approach will work when the HeroService requests heroes from the server.
  // This is using .subscribe method on an Observable object which returned by getHeroes()
  // it waits for the Observable to emit the array of heroes — which could happen now or several minutes from now.
  getHeroes(): void {
    this.heroService.getHeroesFromService()
      // Subscribe passes the emitted array to the callback, which sets the component's heroes property.
      .subscribe(heroesReceivedFromService => this.heroList = heroesReceivedFromService);
  }

  // Not used anymore
  // onSelect(selectedHero: Hero) {
  //   console.log('hero selected:' + selectedHero.id);
  //   this.messageService.add('Hero selected: ' + selectedHero.name + ' id:' + selectedHero.id);
  //   this.heroSelected = selectedHero; // selectedHero object assigned to heroSelected
  // }

  // This will initialize the heroList object by calling the getHeroes method
  ngOnInit() {
    this.getHeroes();
  }

  addHero(name: String, weapon: String): void {
    name = name.trim();
    weapon = weapon.trim();
    if (!name || !weapon) { return; }
    // When addHero saves successfully, the subscribe callback receives the new hero and pushes it into to the heroes list for display.

    // if there is no hero, create a new one with ID=1
    console.log('Heroes List array size before trying to add a new hero: ' + this.heroList.length);

    if (this.heroList.length === 0) { // If heroes array is empty, create the first hero with ID=1
      this.heroService.addHero({ name, weapon, id: 1 } as Hero).subscribe(newHero => this.heroList.push(newHero));
    } else { // automatically increment ID
      this.heroService.addHero({ name, weapon } as Hero).subscribe(newHero => this.heroList.push(newHero));
    }
    console.log(`New hero added: name=${name}, weapon=${weapon}  `);
  }

  deleteHero(heroToDelete: Hero): void {
    console.log('hero to be deleted ' + heroToDelete.name);
    this.heroList = this.heroList.filter(currentHero => currentHero !== heroToDelete); // removes the hero to be deleted from the list

    // If you neglect to subscribe(), the service will not send the delete request to the server!
    // As a rule, an Observable does nothing until something subscribes!
    // Confirm this for yourself by temporarily removing the subscribe(), clicking "Dashboard", then clicking "Heroes".
    // You'll see the full list of heroes again.
    this.heroService.deleteHero(heroToDelete).subscribe(); // actually asking HeroService to delete the hero
  }
}
