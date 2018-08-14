import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {ScreenDisplayRoutingModule} from './screen-display-routing.module';
import {LargeScreenComponent} from './large-screen/large-screen.component';
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


@NgModule({
  providers: [
    ScreenDisplayService
  ],
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
    PersonnelDetailComponent,
    PersonnelPieComponent,
    PExpertBarComponent,
    PRepairBarComponent,
    PManagerBarComponent,
  ],
})
export class ScreenDisplayModule {
}
