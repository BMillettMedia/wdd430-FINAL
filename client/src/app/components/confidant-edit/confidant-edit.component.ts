import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfidantService } from '../../services/confidant.service';
import { Confidant } from '../../models/confidant.model';

@Component({
  selector: 'app-confidant-edit',
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

  constructor(
    private confidantService: ConfidantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.editMode = true;

      this.confidantService.getConfidant(id)
        .subscribe(data => this.confidant = data);

    }

  }

  saveConfidant() {

    if (this.editMode) {

      this.confidantService.updateConfidant(this.confidant._id!, this.confidant)
        .subscribe(() => this.router.navigate(['/']));

    }
    else {

      this.confidantService.addConfidant(this.confidant)
        .subscribe(() => this.router.navigate(['/']));

    }

  }

}