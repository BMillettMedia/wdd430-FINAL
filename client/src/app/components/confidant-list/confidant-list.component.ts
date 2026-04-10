import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ConfidantService, Confidant } from '../../services/confidant.service';

/*
  Displays all confidants in a table
*/

@Component({
  selector: 'app-confidant-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './confidant-list.component.html'
})

export class ConfidantListComponent implements OnInit {

  confidants: Confidant[] = [];

  loading: boolean = true;
  error: string = '';

  constructor(private confidantService: ConfidantService) {}

  ngOnInit(): void {
    this.loadConfidants();
  }

  loadConfidants(): void {

    this.confidantService.getConfidants().subscribe({

      next: (data) => {
        console.log("Loaded confidants:", data);
        this.confidants = data;
        this.loading = false;
      },

      error: (err) => {
        console.error("Error loading confidants:", err);
        this.error = "Failed to load confidants.";
        this.loading = false;
      }

    });

  }

  saveNotes(confidant: Confidant): void {

    if (!confidant._id) return;

    this.confidantService.updateConfidant(confidant._id, confidant).subscribe({

      next: () => {
        console.log("Notes saved");
      },

      error: (err) => {
        console.error("Error saving notes:", err);
      }

    });

  }

}