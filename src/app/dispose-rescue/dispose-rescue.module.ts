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

@NgModule({
  providers: [
    ScreenDisplayService,
    EventEmitterService,
  ],
  imports: [
    CommonModule,
    DisposeRescueModuleRoutingModule,
    NgxEchartsModule
  ],
  declarations: [RepairComponent, ManagerComponent, ExpertComponent, NewsComponent, WorkerComponent]
})
export class DisposeRescueModule { }
