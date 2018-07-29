import { Routes, RouterModule } from '@angular/router';

// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const FULL_ROUTES: Routes = [
  {
    path: 'MainPage',
    loadChildren: './main-page/main-page.module#MainPageModule'
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
    path:'MyProfile',
    loadChildren:'./my-profile/my-profile.module#MyProfileModule'
  }
];
