/**
 * Add / Edit confidant form
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfidantService } from '../../services/confidant.service';

@Component({
  selector: 'app-confidant-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confidant-edit.component.html'
})

export class ConfidantEditComponent implements OnInit {

  confidant: any = {};
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private confidantService: ConfidantService
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.editMode = true;

      this.confidantService.getConfidant(id)
        .subscribe(data => {

          this.confidant = data;

        });

    }

  }

  saveConfidant() {

    if (this.editMode) {

      this.confidantService.updateConfidant(
        this.confidant._id,
        this.confidant
      ).subscribe(() => {

        this.router.navigate(['/']);

      });

    } else {

      this.confidantService.addConfidant(this.confidant)
        .subscribe(() => {

          this.router.navigate(['/']);

        });

    }

  }

}