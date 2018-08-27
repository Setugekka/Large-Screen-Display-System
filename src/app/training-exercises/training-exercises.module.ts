import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingExercisesRoutingModule} from './training-exercises-routing.module';
import { ProvinceTrainingComponent } from './province-training/province-training.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityTrainingComponent } from './city-training/city-training.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TrainingExercisesRoutingModule,
    NgxEchartsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [ProvinceTrainingComponent, CityTrainingComponent]
})
export class TrainingExercisesModule { }
