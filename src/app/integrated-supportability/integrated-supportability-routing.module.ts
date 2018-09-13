import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { LogisticsMaterialComponent } from './logistics-material/logistics-material.component';
import { GeneratorCarComponent } from './generator-car/generator-car.component';
import { AlternatorComponent } from './alternator/alternator.component';
import { LightingComponent } from './lighting/lighting.component';
import { IsIndexComponent } from './is-index/is-index.component';
const routes: Routes = [
  {
    path: '',
    component: IsIndexComponent,
    data: {
      title: 'Index'
    },
  },
  {
    path: 'Material',
    component: MaterialComponent,
    data: {
      title: 'Material'
    },
  },
  {
    path: 'Vehicle',
    component: VehicleComponent,
    data: {
      title: 'Vehicle'
    },
  },
  {
    path: 'Equipment',
    component: EquipmentComponent,
    data: {
      title: 'Equipment'
    },
  },
  {
    path: 'LogisticsMaterial',
    component: LogisticsMaterialComponent,
    data: {
      title: 'LogisticsMaterial'
    },
  },
  {
    path: 'GeneratorCar',
    component: GeneratorCarComponent,
    data: {
      title: 'GeneratorCar'
    },
  },
  {
    path: 'Alternator',
    component: AlternatorComponent,
    data: {
      title: 'Alternator'
    },
  },
  {
    path: 'Lighting',
    component: LightingComponent,
    data: {
      title: 'Lighting'
    },
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegratedSupportabilityRoutingModule { }
