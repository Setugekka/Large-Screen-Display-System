import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntegratedSupportabilityRoutingModule} from "./integrated-supportability-routing.module";
import {NgxEchartsModule} from "ngx-echarts";
import {HttpClientModule} from "@angular/common/http";
import { MaterialComponent } from './material/material.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { LogisticsMaterialComponent } from './logistics-material/logistics-material.component';
import { GeneratorCarComponent } from './generator-car/generator-car.component';
import { AlternatorComponent } from './alternator/alternator.component';
import { LightingComponent } from './lighting/lighting.component';
import {EventEmitterService} from "../screen-display/large-screen/event-emitter.service";
import {ScreenDisplayModule} from "../screen-display/screen-display.module";
import { IsIndexComponent } from './is-index/is-index.component';

@NgModule({
  providers:[EventEmitterService],
  imports: [
    CommonModule,
    IntegratedSupportabilityRoutingModule,
    NgxEchartsModule,
    HttpClientModule,
    ScreenDisplayModule
  ],
  declarations: [MaterialComponent, VehicleComponent, EquipmentComponent, LogisticsMaterialComponent, GeneratorCarComponent, AlternatorComponent, LightingComponent, IsIndexComponent]
})
export class IntegratedSupportabilityModule { }
