import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {DisplayComponent} from './display/display.component';


const routes: Routes = [
  {
    path: 'Display',
    component: DisplayComponent,
    data: {
      title: 'Display'
    },
  },

];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class VideoRoutingModule { }
