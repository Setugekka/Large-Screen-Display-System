import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CustomizerComponent} from "./customizer/customizer.component";
import {ToggleFullscreenDirective} from "./directives/toggle-fullscreen.directive";
import { OrgchartComponent } from './orgchart/orgchart.component';


@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizerComponent,
    OrgchartComponent,
    ToggleFullscreenDirective,
    NgbModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizerComponent,
    ToggleFullscreenDirective,
    OrgchartComponent
  ]
})
export class SharedModule {
}
