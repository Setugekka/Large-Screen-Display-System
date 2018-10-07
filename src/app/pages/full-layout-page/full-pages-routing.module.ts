import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FullLayoutPageComponent} from "./full-layout-page.component";

const routes: Routes = [
  {
    path: '',
     component: FullLayoutPageComponent,
    data: {
      title: 'Full Layout Page'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
