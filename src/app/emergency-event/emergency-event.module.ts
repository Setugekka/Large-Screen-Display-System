import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import {EventRoutingModule} from './event-routing.module'
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EmergencyEventService} from "./emergency-event.service";

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [GenerateReportComponent],
  providers:[EmergencyEventService]
})
export class EmergencyEventModule { }
