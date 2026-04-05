import { Component, OnInit } from '@angular/core';

import { ConfidantService } from '../../services/confidant.service';
import { Confidant } from '../../models/confidant.model';

@Component({
  selector: 'app-confidant-list',
  templateUrl: './confidant-list.component.html',
  styleUrls: ['./confidant-list.component.css']
})
export class ConfidantListComponent implements OnInit {

  confidants: Confidant[] = [];

  constructor(private confidantService: ConfidantService) { }

  ngOnInit(): void {

    this.confidantService.getConfidants()
      .subscribe(data => {

        this.confidants = data;

      });

  }

}