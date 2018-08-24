import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContingencyPlanRoutingModule} from "./contingency-plan-routing.module";
import { ProvincePlanComponent } from './province-plan/province-plan.component';
import { CityPlanComponent } from './city-plan/city-plan.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    ContingencyPlanRoutingModule,
    NgbModule
  ],
  declarations: [ProvincePlanComponent, CityPlanComponent]
})
export class ContingencyPlanModule { }
