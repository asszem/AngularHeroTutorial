import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; // needs to be imported so it can be fereneced in a route

// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.

// path: a string that matches the URL in the browser address bar
// component: the component that the router should create when navigation to this route

// You intend to navigate to the HeroesComponent when the URL is something like localhost:4200/heroes.
const routes: Routes = [
  { path: 'heroesPathInURL', component: HeroesComponent }
];

// You generally don't declare components in a routing module so you can delete the @NgModule.declarations
// array and delete CommonModule references too.
@NgModule({
  imports: [
    // CommonModule

    // The method is called forRoot() because you configure the router at the application's root level.
    // The forRoot() method supplies the service providers and directives needed for routing
    // and performs the initial navigation based on the current browser URL.
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule {}
