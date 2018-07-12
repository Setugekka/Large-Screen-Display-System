import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleFullscreenDirective} from './directives/toggle-fullscreen.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ToggleFullscreenDirective
  ],
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, ToggleFullscreenDirective]
})
export class SharedModule { }
