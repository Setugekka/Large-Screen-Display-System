import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InstitutionsComponent} from './institutions/institutions.component';


const routes: Routes = [
  {
    path: 'Institutions',
    component: InstitutionsComponent,
    data: {
      title: 'Institutions'
    },
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyRegimeRoutingModule { }
