import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InstitutionsComponent} from './institutions/institutions.component';
import {WholeInstitutionComponent} from './whole-institution/whole-institution.component';


const routes: Routes = [
  {
    path: 'Institutions',
    component: InstitutionsComponent,
    data: {
      title: 'Institutions'
    },
  },
  {
    path: 'WholeInstitution',
    component: WholeInstitutionComponent,
    data: {
      title: 'WholeInstitutionComponent'
    }
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyRegimeRoutingModule { }
