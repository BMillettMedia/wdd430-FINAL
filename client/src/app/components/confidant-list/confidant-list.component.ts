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
  filteredConfidants: Confidant[] = [];

  selectedGame = 'All';
  searchTerm = '';

  constructor(private confidantService: ConfidantService) {}

  ngOnInit(): void {

    this.loadConfidants();

  }

  loadConfidants() {

    this.confidantService.getConfidants()
      .subscribe(data => {

        this.confidants = data;
        this.applyFilters();

      });

  }

  applyFilters() {

    this.filteredConfidants = this.confidants.filter(c => {

      const matchesGame =
        this.selectedGame === 'All' ||
        c.game === this.selectedGame;

      const matchesSearch =
        c.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      return matchesGame && matchesSearch;

    });

  }

  deleteConfidant(id: string) {

    this.confidantService.deleteConfidant(id)
      .subscribe(() => this.loadConfidants());

  }

}