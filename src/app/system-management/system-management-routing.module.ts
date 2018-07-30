import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessControlComponent } from './access-control/access-control.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'AccessControl',
        component: AccessControlComponent,
        data: {
          title: 'AccessControl'
        }
      },
      {
        path: 'UserManagement',
        component: UserManagementComponent,
        data: {
          title: 'UserManagement'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemManagementRoutingModule { }
