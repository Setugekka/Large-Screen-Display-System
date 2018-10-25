import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LargeScreenComponent} from './large-screen/large-screen.component';
import { PreventionComponent } from './prevention/prevention.component';

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
      },
      {
        path: 'Prevention',
        component: PreventionComponent,
        data: {
          title: 'Prevention'
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
