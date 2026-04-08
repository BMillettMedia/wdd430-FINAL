import { Routes } from '@angular/router';

import { ConfidantListComponent } from './components/confidant-list/confidant-list.component';
import { ConfidantEditComponent } from './components/confidant-edit/confidant-edit.component';

export const routes: Routes = [

  {
    path: '',
    component: ConfidantListComponent
  },

  {
    path: 'add',
    component: ConfidantEditComponent
  },

  {
    path: 'edit/:id',
    component: ConfidantEditComponent
  }

];