import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Status',
        component: StatusComponent,
        data: {
          title: 'GenerateReport'
        }
      },
      {
        path: 'Management',
        component: ManagementComponent,
        data: {
          title: 'Management'
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
export class PublicOpinionResponseRoutingModule { }
