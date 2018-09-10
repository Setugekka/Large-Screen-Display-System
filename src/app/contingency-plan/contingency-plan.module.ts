import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContingencyPlanRoutingModule} from './contingency-plan-routing.module';
import { ProvincePlanComponent } from './province-plan/province-plan.component';
import { CityPlanComponent } from './city-plan/city-plan.component';
import {NgxEchartsModule} from 'ngx-echarts';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WholePlanComponent } from './whole-plan/whole-plan.component';


@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    ContingencyPlanRoutingModule,
    NgbModule,
    NgbModalModule
  ],

  declarations: [ProvincePlanComponent, CityPlanComponent, WholePlanComponent]
})
export class ContingencyPlanModule { }
