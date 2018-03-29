import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
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
  constructor(private heroService: HeroService) {}

  // Declarations
  heroList: Hero[]; // The values will be retrieved from the heroService
  heroSelected: Hero; // The value will be retrieved from the onClick event on a <li> element

  getHeroes(): void {
    this.heroList = this.heroService.getHeroes();
  }

  onSelect(selectedHero: Hero) {
    console.log('hero selected:' + selectedHero.id);
    this.heroSelected = selectedHero; // selectedHero object assigned to heroSelected
  }
  ngOnInit() {
    this.getHeroes();
  }
}
