import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D5000Component } from './d5000/d5000.component';
import { WeatherComponent } from './weather/weather.component';
import { IrrigationComponent } from './irrigation/irrigation.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { FirecontrolComponent } from './firecontrol/firecontrol.component';
import { PoliceComponent } from './police/police.component';
import { MedicalComponent } from './medical/medical.component';
import { TrafficComponent } from './traffic/traffic.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'D5000',
        component: D5000Component,
        data: {
          title: 'D5000'
        }
      },
      {
        path: 'Weather',
        component: WeatherComponent,
        data: {
          title: 'Weather'
        }
      },
      {
        path: 'Irrigation',
        component: IrrigationComponent,
        data: {
          title: 'Irrigation'
        }
      },
      {
        path: 'Earthquake',
        component: EarthquakeComponent,
        data: {
          title: 'Earthquake'
        }
      },
      {
        path: 'Firecontrol',
        component: FirecontrolComponent,
        data: {
          title: 'Firecontrol'
        }
      },
      {
        path: 'Police',
        component: PoliceComponent,
        data: {
          title: 'Police'
        }
      },
      {
        path: 'Medical',
        component: MedicalComponent,
        data: {
          title: 'Medical'
        }
      },
      {
        path: 'Traffic',
        component: TrafficComponent,
        data: {
          title: 'Traffic'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalSupportRoutingModule { }
