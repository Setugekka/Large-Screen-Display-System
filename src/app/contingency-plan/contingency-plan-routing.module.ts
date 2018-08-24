import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvincePlanComponent} from './province-plan/province-plan.component';
import {CityPlanComponent} from './city-plan/city-plan.component';


const routes: Routes = [
  {
    path: 'ProvincePlan',
    component: ProvincePlanComponent,
    data: {
      title: 'ProvincePlan'
    },
  },
  {
    path: 'CityPlan',
    component: CityPlanComponent,
    data: {
      title: 'CityPlan'
    },
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContingencyPlanRoutingModule { }
