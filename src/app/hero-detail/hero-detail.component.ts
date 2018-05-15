// tslint:disable:max-line-length
// To import the @Input() decorator
import { Component, OnInit, Input } from '@angular/core';
// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's bag of parameters extracted from the URL. The "id" parameter is the id of the hero to display.
import { ActivatedRoute } from '@angular/router';
// The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // This component simply receives a hero object through its hero property and displays it.
  @Input() heroToDisplay: Hero;

  // Injecting services into the constructor saving their values in private fields
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroToDisplayDetails();
  }

  getHeroToDisplayDetails(): void {
  /*The 'route.snapshot' is a static image of the route information shortly after the component was created.

    The 'paramMap' is a dictionary of route parameter values extracted from the URL.

    The "idInURL" key returns the id of the hero to fetch. Route parameters are always strings.

    The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
  */
    const id = +this.route.snapshot.paramMap.get('idInURL');
    // the hero returned by .getASpecificHero()ID to heroToDisplay property will be displayed
    this.heroService
      .getASpecificHero(id)
      .subscribe(currentHero => (this.heroToDisplay = currentHero));
  }

  goBack(): void {
    this.location.back();
  }
}
