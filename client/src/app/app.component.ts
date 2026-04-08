import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root component for the SPA
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Persona Confidant Manager</h1>

    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/add">Add Confidant</a>
    </nav>

    <router-outlet></router-outlet>
  `
})

export class AppComponent {}