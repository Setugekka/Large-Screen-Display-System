import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProvinceTrainingComponent} from './province-training/province-training.component';
import {CityTrainingComponent} from './city-training/city-training.component';



const routes: Routes = [
  {
    path: 'ProvinceTraining',
    component: ProvinceTrainingComponent,
    data: {
      title: 'ProvinceTraining'
    },
  },
  {
    path: 'CityTraining',
    component: CityTrainingComponent,
    data: {
      title: 'CityTraining'
    },
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingExercisesRoutingModule { }
