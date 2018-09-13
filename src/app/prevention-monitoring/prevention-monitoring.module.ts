import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScreenDisplayModule} from "../screen-display/screen-display.module";
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import {PreventionMonitoringRoutingModule} from './prevention-monitoring-routing.module';
import { VideoSurveillanceComponent } from './video-surveillance/video-surveillance.component';
import { VideoTransmissionComponent } from './video-transmission/video-transmission.component';
import { SystemMapComponent } from './system-map/system-map.component';
import { WarningSignalsComponent } from './warning-signals/warning-signals.component';
import { WarningDetailComponent } from './warning-detail/warning-detail.component';
import { PmIndexComponent } from './pm-index/pm-index.component';

@NgModule({
  imports: [
    CommonModule,
    PreventionMonitoringRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModalModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ScreenDisplayModule
  ],
  declarations: [VideoSurveillanceComponent, VideoTransmissionComponent, SystemMapComponent, WarningSignalsComponent, WarningDetailComponent, PmIndexComponent]
})
export class PreventionMonitoringModule { }
