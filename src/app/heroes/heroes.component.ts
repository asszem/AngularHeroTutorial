import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() {}
  heroList = HEROES; // Import the mock heroes
  heroSelected: Hero; // Property is declared, but not yet assigned
  onSelect(selectedHero: Hero) {
    console.log('hero selected:' + selectedHero.id);
    this.heroSelected = selectedHero; // selectedHero object assigned to heroSelected
  }
  ngOnInit() {
  }

}
