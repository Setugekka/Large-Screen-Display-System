import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScreenDisplayRoutingModule} from './screen-display-routing.module';
import { LargeScreenComponent } from './large-screen/large-screen.component';
import { PersonnelComponent } from './large-screen/personnel/personnel.component';
import {GeneratorBarComponent} from './large-screen/generator-bar/generator-bar.component'
import {NgxEchartsModule} from 'ngx-echarts'
import {HttpClientModule} from "@angular/common/http";
import { RepaircarBarComponent } from './large-screen/repaircar-bar/repaircar-bar.component';
import { GeneratorPieComponent } from './large-screen/generator-pie/generator-pie.component';
import { RepaircarTimelineComponent } from './repaircar-timeline/repaircar-timeline.component';
import { GeneratorRadarComponent } from './large-screen/generator-radar/generator-radar.component';


@NgModule({
  imports: [
    CommonModule,
    ScreenDisplayRoutingModule,
    NgxEchartsModule,
    HttpClientModule
  ],
  declarations: [
    LargeScreenComponent,
    PersonnelComponent,
    GeneratorBarComponent,
    RepaircarBarComponent,
    GeneratorPieComponent,
    RepaircarTimelineComponent,
    GeneratorRadarComponent,

  ],
})
export class ScreenDisplayModule { }
