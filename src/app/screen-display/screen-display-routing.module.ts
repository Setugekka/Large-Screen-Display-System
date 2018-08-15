import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LargeScreenComponent} from './large-screen/large-screen.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'LargeScreen',
        component: LargeScreenComponent,
        data: {
          title: 'LargeScreen'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenDisplayRoutingModule { }
