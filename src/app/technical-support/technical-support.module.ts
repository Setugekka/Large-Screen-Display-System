import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalSupportRoutingModule} from "./technical-support-routing.module";
import { D5000Component } from './d5000/d5000.component';
import { WeatherComponent } from './weather/weather.component';
import { IrrigationComponent } from './irrigation/irrigation.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { FirecontrolComponent } from './firecontrol/firecontrol.component';
import { PoliceComponent } from './police/police.component';
import { MedicalComponent } from './medical/medical.component';
import { TrafficComponent } from './traffic/traffic.component';

@NgModule({
  imports: [
    CommonModule,
    TechnicalSupportRoutingModule
  ],
  declarations: [D5000Component, WeatherComponent, IrrigationComponent, EarthquakeComponent, FirecontrolComponent, PoliceComponent, MedicalComponent, TrafficComponent]
})
export class TechnicalSupportModule { }
