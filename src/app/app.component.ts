import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  template: `
  <app-navbar-nav></app-navbar-nav>
  <router-outlet></router-outlet>`

})
export class AppComponent {
  title = 'Event Listing';
}
