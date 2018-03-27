import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-sandbox',
  templateUrl: './hero-sandbox.component.html',
  styleUrls: ['./hero-sandbox.component.css']
})
export class HeroSandboxComponent implements OnInit {

  constructor() { }
  heroString = 'StringHős';
  heroObject: Hero = {  // Property ('heroObject') declared and instantiated
    id: 1,
    name: 'ObjectHős',
    weapon: 'Pallos'
  };

  @Input() theSelectedHero: Hero;
  ngOnInit() {
  }

}
