import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root component for the SPA
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `./app.component.html`
})

export class AppComponent {
    title= 'Persona Confidant Manager';
}