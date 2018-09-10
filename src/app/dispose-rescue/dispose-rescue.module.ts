import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisposeRescueModuleRoutingModule} from "./dispose-rescue-routing.module";
import { RepairComponent } from './repair/repair.component';
import { ManagerComponent } from './manager/manager.component';
import { ExpertComponent } from './expert/expert.component';
import { NewsComponent } from './news/news.component';
import { WorkerComponent } from './worker/worker.component';
import {ScreenDisplayService} from "../screen-display/screen-display.service";
import {EventEmitterService} from "../screen-display/large-screen/event-emitter.service";
import {NgxEchartsModule} from "ngx-echarts";
import { DrIndexComponent } from './dr-index/dr-index.component';
import {ScreenDisplayModule} from "../screen-display/screen-display.module";

@NgModule({
  providers: [
    ScreenDisplayService,
    EventEmitterService,
  ],
  imports: [
    CommonModule,
    DisposeRescueModuleRoutingModule,
    NgxEchartsModule,
    ScreenDisplayModule
  ],
  declarations: [RepairComponent, ManagerComponent, ExpertComponent, NewsComponent, WorkerComponent, DrIndexComponent]
})
export class DisposeRescueModule { }
