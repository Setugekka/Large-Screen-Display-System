import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyAuthorityComponent } from './my-authority/my-authority.component';
import { OperationLogComponent } from './operation-log/operation-log.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'EditProfile',
        component: EditProfileComponent,
        data: {
          title: 'EditProfile'
        }
      },
      {
        path: 'MyAuthority',
        component: MyAuthorityComponent,
        data: {
          title: 'MyAuthority'
        }
      },
      {
        path: 'OperationLog',
        component: OperationLogComponent,
        data: {
          title: 'OperationLog'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileRoutingModule { }
