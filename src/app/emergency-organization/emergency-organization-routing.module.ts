import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProvinceOrganizationComponent} from './province-organization/province-organization.component';
import {CityOrganizationComponent} from './city-organization/city-organization.component';



const routes: Routes = [
  {
    path: 'ProvinceOrganization',
    component: ProvinceOrganizationComponent,
    data: {
      title: 'ProvinceOrganization'
    },
  },
  {
    path: 'CityOrganization',
    component: CityOrganizationComponent,
    data: {
      title: 'CityOrganization'
    },
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyOrganizationRoutingModule { }
