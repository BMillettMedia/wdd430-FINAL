import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfidantService } from '../../services/confidant.service';

/*
  Confidant Edit Component

  Purpose:
  Allows users to edit a confidant's:
  - Rank
  - Personal notes

  The updated information is saved back
  to MongoDB through the Node API.
*/

@Component({
  selector: 'app-confidant-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confidant-edit.component.html'
})

export class ConfidantEditComponent implements OnInit {

  // Holds confidant data retrieved from the API
  confidant: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private confidantService: ConfidantService
  ) {}

  /*
    Runs when component loads.
    Retrieves the confidant ID from the URL
    and loads that confidant from the database.
  */
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    // Ensure ID exists before using it
    if (id) {
      this.confidantService.getConfidant(id)
        .subscribe({
          next: (data) => {
            this.confidant = data;
          },
          error: (err) => {
            console.error('Error loading confidant:', err);
          }
        });
    }
  }

  /*
    Saves updated confidant information
    (rank and notes) back to MongoDB
  */
  save(): void {

    if (!this.confidant || !this.confidant._id) {
      console.error("Confidant ID missing");
      return;
    }

    this.confidantService.updateConfidant(this.confidant)
      .subscribe({
        next: () => {
          console.log("Confidant updated successfully");
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error("Update failed:", err);
        }
      });
  }

}