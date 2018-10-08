import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {EmergencyOrganizationRoutingModule} from './emergency-organization-routing.module';

import { ProvinceOrganizationComponent } from './province-organization/province-organization.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityOrganizationComponent } from './city-organization/city-organization.component';
import { WholeOrganizationComponent } from './whole-organization/whole-organization.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    EmergencyOrganizationRoutingModule,
    NgxEchartsModule,
    NgbModule,
    SharedModule
  ],
  declarations: [ProvinceOrganizationComponent, CityOrganizationComponent, WholeOrganizationComponent]
})
export class EmergencyOrganizationModule { }
