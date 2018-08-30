import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VideoSurveillanceComponent } from './video-surveillance/video-surveillance.component';
import { VideoTransmissionComponent } from './video-transmission/video-transmission.component';
import { SystemMapComponent } from './system-map/system-map.component';
import { WarningSignalsComponent } from './warning-signals/warning-signals.component';
import {WarningDetailComponent} from './warning-detail/warning-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'VideoSurveillance',
        component: VideoSurveillanceComponent,
        data: {
          title: 'VideoSurveillance'
        }
      },
      {
        path: 'VideoTransmission',
        component: VideoTransmissionComponent,
        data: {
          title: 'VideoTransmission'
        }
      },
      {
        path: 'SystemMap',
        component: SystemMapComponent,
        data: {
          title: 'SystemMap'
        }
      },
      {
        path: 'WarningSignals',
        component: WarningSignalsComponent,
        data: {
          title: 'WarningSignals'
        }
      },
      {
        path: 'WarningDetail',
        component: WarningDetailComponent,
        data: {
          title: 'WarningDetail'
        }
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],

})
export class PreventionMonitoringRoutingModule { }
