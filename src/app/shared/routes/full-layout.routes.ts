import { Routes, RouterModule } from '@angular/router';
import {DashboardModule} from "../../dashboard/dashboard.module";
import {SystemManagementModule} from "../../system-management/system-management.module";
import {ScreenDisplayModule} from '../../screen-display/screen-display.module';

// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const FULL_ROUTES: Routes = [
  {
    path: 'MainPage',
    loadChildren: './main-page/main-page.module#MainPageModule'
  },
  {
    path: 'DashBoard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'DataManagement',
    loadChildren: './data-management/data-management.module#DataManagementModule'
  },
  {
    path: 'Video',
    loadChildren: './video/video.module#VideoModule'
  },
  {
    path: 'SystemManagement',
    loadChildren: './system-management/system-management.module#SystemManagementModule'
  },
  {
    path: 'MyProfile',
    loadChildren: './my-profile/my-profile.module#MyProfileModule'
  },
  {
    path: 'EmergencyEvent',
    loadChildren: './emergency-event/emergency-event.module#EmergencyEventModule'
  },
  {
    path: 'ScreenDisplay',
    loadChildren: './screen-display/screen-display.module#ScreenDisplayModule'
  }
];
