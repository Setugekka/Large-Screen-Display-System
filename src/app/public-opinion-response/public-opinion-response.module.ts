import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { ManagementComponent } from './management/management.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgxEchartsModule} from "ngx-echarts";
import {PublicOpinionResponseRoutingModule} from "./public-opinion-response-routing.module";
import {EmergencyEventService} from "../emergency-event/emergency-event.service";
import { PorIndexComponent } from './por-index/por-index.component';
import {ScreenDisplayModule} from "../screen-display/screen-display.module";
import {EventEmitterService} from "../screen-display/large-screen/event-emitter.service";

@NgModule({
  providers:[EmergencyEventService,EventEmitterService],
  imports: [
    CommonModule,
    PublicOpinionResponseRoutingModule,
    NgxEchartsModule,
    HttpClientModule,
    FormsModule,
    ScreenDisplayModule
  ],
  declarations: [StatusComponent, ManagementComponent, PorIndexComponent]
})
export class PublicOpinionResponseModule { }
