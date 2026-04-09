import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfidantService } from '../../services/confidant.service';

/*
  Displays details for a single confidant.
*/

@Component({
  selector: 'app-confidant-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confidant-detail.component.html'
})
export class ConfidantDetailComponent implements OnInit {

  confidant: any = null;

  constructor(
    private route: ActivatedRoute,
    private confidantService: ConfidantService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    // Ensure id exists before calling service
    if (id) {
      this.confidantService.getConfidant(id).subscribe({
        next: (data) => {
          this.confidant = data;
        },
        error: (err) => {
          console.error('Error loading confidant:', err);
        }
      });
    } else {
      console.error('No confidant ID provided in route');
    }
  }

}