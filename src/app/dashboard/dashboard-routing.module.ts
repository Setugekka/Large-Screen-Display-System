import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { WeatherComponent } from './weather/weather.component';
import { ReservoirComponent } from './reservoir/reservoir.component';
import { HighwayComponent } from './highway/highway.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { StaffComponent } from './staff/staff.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Overview',
        component: OverviewComponent,
        data: {
          title: 'Overview'
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
        path: 'Reservoir',
        component: ReservoirComponent,
        data: {
          title: 'Reservoir'
        }
      },
      {
        path: 'Highway',
        component: HighwayComponent,
        data: {
          title: 'Highway'
        }
      },
      {
        path: 'Equipment',
        component: EquipmentComponent,
        data: {
          title: 'Equipment'
        }
      },
      {
        path: 'Staff',
        component: StaffComponent,
        data: {
          title: 'Staff'
        }
      },
      {
        path: 'Material',
        component: MaterialComponent,
        data: {
          title: 'Material'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
