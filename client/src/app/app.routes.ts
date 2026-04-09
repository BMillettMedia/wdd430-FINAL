import { Routes } from '@angular/router';

import { ConfidantListComponent } from './components/confidant-list/confidant-list.component';
import { ConfidantDetailComponent } from './components/confidant-detail/confidant-detail.component';
import { ConfidantEditComponent } from './components/confidant-edit/confidant-edit.component';

export const routes: Routes = [
  { path: '', component: ConfidantListComponent },
  { path: 'detail/:id', component: ConfidantDetailComponent },
  { path: 'edit/:id', component: ConfidantEditComponent }
];