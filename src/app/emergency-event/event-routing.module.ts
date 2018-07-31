import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {GenerateReportComponent} from './generate-report/generate-report.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'GenerateReport',
        component: GenerateReportComponent,
        data: {
          title: 'GenerateReport'
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
  exports:[
    RouterModule,
  ],

})
export class EventRoutingModule { }
