import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ConfidantService, Confidant } from '../../services/confidant.service';

/*
  Component for creating or editing a confidant
*/

@Component({
  selector: 'app-confidant-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confidant-edit.component.html'
})

export class ConfidantEditComponent implements OnInit {

  confidant: Confidant = {
    name: '',
    arcana: '',
    game: '',
    rank: 1,
    maxRank: 10,
    notes: ''
  };

  editMode = false;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private confidantService: ConfidantService
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {

      this.editMode = true;

      this.confidantService.getConfidant(this.id).subscribe({

        next: (data) => {
          this.confidant = data;
        },

        error: (err) => {
          console.error("Error loading confidant:", err);
        }

      });

    }
  }

  saveConfidant(): void {

    if (this.editMode && this.id) {

      this.confidantService.updateConfidant(this.id, this.confidant).subscribe({

        next: () => {
          console.log("Confidant updated");
          this.router.navigate(['/']);
        },

        error: (err) => {
          console.error("Update failed:", err);
        }

      });

    } else {

      this.confidantService.createConfidant(this.confidant).subscribe({

        next: () => {
          console.log("Confidant created");
          this.router.navigate(['/']);
        },

        error: (err) => {
          console.error("Creation failed:", err);
        }

      });

    }
  }
}