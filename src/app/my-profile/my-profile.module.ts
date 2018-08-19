import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule} from "./my-profile-routing.module";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyAuthorityComponent } from './my-authority/my-authority.component';
import { OperationLogComponent } from './operation-log/operation-log.component';

@NgModule({
  imports: [
    CommonModule,
    MyProfileRoutingModule
  ],
  declarations: [EditProfileComponent, MyAuthorityComponent, OperationLogComponent]
})
export class MyProfileModule { }
