import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfidantService } from '../../services/confidant.service';

/*
  Allows editing or adding a confidant.
*/

@Component({
  selector: 'app-confidant-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confidant-edit.component.html'
})
export class ConfidantEditComponent implements OnInit {

  confidant: any = {};
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private confidantService: ConfidantService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editMode = true;

      this.confidantService.getConfidant(id).subscribe({
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

    if (this.editMode) {

      this.confidantService.updateConfidant(this.confidant).subscribe({
        next: () => {
          console.log("Confidant updated successfully");
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error("Update failed:", err);
        }
      });

    } else {

      this.confidantService.createConfidant(this.confidant).subscribe({
        next: () => {
          console.log("Confidant created successfully");
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error("Creation failed:", err);
        }
      });

    }
  }
}