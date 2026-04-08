import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

/**
 * Root application component
 * Displays navigation and router outlet
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],

  template: `
    <h1>Persona Confidant Manager</h1>

    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/add">Add Confidant</a>
    </nav>

    <hr>

    <router-outlet></router-outlet>
  `
})

export class AppComponent {}