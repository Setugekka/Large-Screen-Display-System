import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvincePlanComponent} from './province-plan/province-plan.component';
import {CityPlanComponent} from './city-plan/city-plan.component';
import {WholePlanComponent} from './whole-plan/whole-plan.component';
import {ManageComponent} from "./manage/manage.component";

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
  {
    path: 'WholePlan',
    component: WholePlanComponent,
    data: {
      title: 'WholePlan'
    }
  },
  {
    path: 'Manage',
    component: ManageComponent,
    data: {
      title: 'Manage'
    }
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContingencyPlanRoutingModule { }
