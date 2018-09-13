import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {ScreenDisplayRoutingModule} from './screen-display-routing.module';
import {LargeScreenComponent} from './large-screen/large-screen.component';
import { EventEmitterService} from './large-screen/event-emitter.service';
import {PersonnelComponent} from './large-screen/personnel/personnel.component';
import {GeneratorBarComponent} from './large-screen/generator-bar/generator-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {RepaircarBarComponent} from './large-screen/repaircar-bar/repaircar-bar.component';
import {GeneratorPieComponent} from './large-screen/generator-pie/generator-pie.component';
import {RepaircarTimelineComponent} from './large-screen/repaircar-timeline/repaircar-timeline.component';
import {GeneratorRadarComponent} from './large-screen/generator-radar/generator-radar.component';
import {ScreenDisplayService} from './screen-display.service';
import { PersonnelDetailComponent } from './large-screen/personnel-detail/personnel-detail.component';
import { PersonnelPieComponent } from './large-screen/personnel-pie/personnel-pie.component';
import { PExpertBarComponent } from './large-screen/p-expert-bar/p-expert-bar.component';
import { PRepairBarComponent } from './large-screen/p-repair-bar/p-repair-bar.component';
import { PManagerBarComponent } from './large-screen/p-manager-bar/p-manager-bar.component';
import { UrgentMaterialTreeComponent } from './large-screen/urgent-material-tree/urgent-material-tree.component';
import { DetailviewComponent } from './large-screen/detailview/detailview.component';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {DataTablesModule} from "angular-datatables";
import { MapComponent } from './large-screen/map/map.component';
import { EquipmentCircleComponent} from './large-screen/equipment-circle/equipment-circle.component';
import { StuffCircleComponent} from './large-screen/stuff-circle/stuff-circle.component';
import {MaterialCircleComponent} from './large-screen/material-circle/material-circle.component';
import { MessageScatterComponent } from './large-screen/message-scatter/message-scatter.component';
import { ClockComponent } from './large-screen/clock/clock.component';
import { MapExtendComponent } from './large-screen/map-extend/map-extend.component';



@NgModule({
  providers: [
    ScreenDisplayService,
    EventEmitterService,
  ],
  entryComponents:[DetailviewComponent],
  imports: [
    CommonModule,
    ScreenDisplayRoutingModule,
    NgxEchartsModule,
    HttpClientModule,
    NgbModalModule,
    DataTablesModule
  ],
  declarations: [
    LargeScreenComponent,
    PersonnelComponent,
    GeneratorBarComponent,
    RepaircarBarComponent,
    GeneratorPieComponent,
    RepaircarTimelineComponent,
    GeneratorRadarComponent,
    PersonnelDetailComponent,
    PersonnelPieComponent,
    PExpertBarComponent,
    PRepairBarComponent,
    PManagerBarComponent,
    UrgentMaterialTreeComponent,
    DetailviewComponent,
    MapComponent,
    EquipmentCircleComponent,
    StuffCircleComponent,
    MaterialCircleComponent,
    MessageScatterComponent,
    ClockComponent,
    MapExtendComponent
  ],
  exports:[DetailviewComponent,MapExtendComponent,MapComponent]

})
export class ScreenDisplayModule {
}
