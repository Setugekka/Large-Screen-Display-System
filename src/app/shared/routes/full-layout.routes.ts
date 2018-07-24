import { Routes, RouterModule } from '@angular/router';

// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const FULL_ROUTES: Routes = [
  {
    path: 'MainPage',
    loadChildren: './main-page/main-page.module#MainPageModule'
  },
  {
    path:'MyProfile',
    loadChildren:'./my-profile/my-profile.module#MyProfileModule'
  }
];
