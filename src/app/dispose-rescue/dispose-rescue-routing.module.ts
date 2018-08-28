import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { RepairComponent } from './repair/repair.component';
import { ManagerComponent } from './manager/manager.component';
import { ExpertComponent } from './expert/expert.component';
import { NewsComponent } from './news/news.component';
import { WorkerComponent } from './worker/worker.component';
const routes: Routes = [
  {
    path: 'Expert',
    component: ExpertComponent,
    data: {
      title: 'Expert'
    },
  },
  {
    path: 'Manager',
    component: ManagerComponent,
    data: {
      title: 'Manager'
    },
  },
  {
    path: 'News',
    component: NewsComponent,
    data: {
      title: 'News'
    },
  },
  {
    path: 'Repair',
    component: RepairComponent,
    data: {
      title: 'Repair'
    },
  },
  {
    path: 'Worker',
    component: WorkerComponent,
    data: {
      title: 'Worker'
    },
  },

];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DisposeRescueModuleRoutingModule { }
