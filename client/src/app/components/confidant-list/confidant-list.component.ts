import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConfidantService } from '../../services/confidant.service';

/**
 * Displays all confidants in a table
 */

@Component({
  selector: 'app-confidant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './confidant-list.component.html'
})

export class ConfidantListComponent implements OnInit {

  confidants: any[] = [];

  constructor(private confidantService: ConfidantService) {}

  ngOnInit(): void {

    this.loadConfidants();

  }

  loadConfidants(): void {

    this.confidantService.getConfidants()
      .subscribe((data) => {

        this.confidants = data;

      });

  }

}