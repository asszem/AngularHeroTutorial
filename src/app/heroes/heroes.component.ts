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
  heroString = 'StringHős';
  heroObject: Hero = {  // Property ('heroObject') declared and instantiated
    id: 1,
    name: 'ObjectHős',
    weapon: 'Pallos'
  };
  heroList = HEROES;
  heroSelected: Hero; // Property is declared, but not yet assigned
  onSelect(selectedHero: Hero) {
    this.heroSelected = selectedHero; // selectedHero object assigned to heroSelected
  }
  ngOnInit() {
  }

}
