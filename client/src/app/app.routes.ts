import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfidantListComponent } from './components/confidant-list/confidant-list.component';
import { ConfidantEditComponent } from './components/confidant-edit/confidant-edit.component';
import { ConfidantDetailComponent } from './components/confidant-detail/confidant-detail.component';

const routes: Routes = [

  { path: '', component: ConfidantListComponent },

  { path: 'confidant/new', component: ConfidantEditComponent },

  { path: 'confidant/:id', component: ConfidantDetailComponent },

  { path: 'confidant/edit/:id', component: ConfidantEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }