import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DataTablesModule} from "angular-datatables";
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
import { McAllComponent } from './mc-all/mc-all.component';
import { MvAllComponent } from './mv-all/mv-all.component';
import { McEduComponent } from './mc-edu/mc-edu.component';
import { MvEduComponent } from './mv-edu/mv-edu.component';
import { ModalDatatableComponent } from './modal-datatable/modal-datatable.component';
import { SingleDatatableComponent } from './single-datatable/single-datatable.component';

@NgModule({
  providers: [
    ScreenDisplayService,
    EventEmitterService,
  ],
  imports: [
    CommonModule,
    DisposeRescueModuleRoutingModule,
    NgxEchartsModule,
    ScreenDisplayModule,
    NgbModalModule,
    DataTablesModule,
    NgbModule
  ],
  entryComponents: [
    ModalDatatableComponent, SingleDatatableComponent
  ],
  declarations: [RepairComponent, ManagerComponent, ExpertComponent, NewsComponent, WorkerComponent, DrIndexComponent, McAllComponent, MvAllComponent, McEduComponent, MvEduComponent, ModalDatatableComponent, SingleDatatableComponent]
})
export class DisposeRescueModule { }
