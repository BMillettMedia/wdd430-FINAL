import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

/**
 * Root component for the SPA
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `<nav>

  <a routerLink="/">Home</a> |
  <a routerLink="/">Confidants and Social Links</a>

</nav>

<hr>
<router-outlet></router-outlet>`
})

export class AppComponent {
    title= 'Persona Confidant Manager';
}