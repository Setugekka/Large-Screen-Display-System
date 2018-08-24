import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {EmergencyOrganizationRoutingModule} from "./emergency-organization-routing.module";

import { ProvinceOrganizationComponent } from './province-organization/province-organization.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityOrganizationComponent } from './city-organization/city-organization.component';
@NgModule({
  imports: [
    CommonModule,
    EmergencyOrganizationRoutingModule,
    NgxEchartsModule,
    NgbModule,
  ],
  declarations: [ProvinceOrganizationComponent, CityOrganizationComponent]
})
export class EmergencyOrganizationModule { }
