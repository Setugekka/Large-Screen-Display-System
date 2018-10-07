import { Routes, RouterModule } from '@angular/router';
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
    path: 'EmergencyOrganization',
    loadChildren: './emergency-organization/emergency-organization.module#EmergencyOrganizationModule'
  },
  {
    path: 'EmergencyRegime',
    loadChildren: './emergency-regime/emergency-regime.module#EmergencyRegimeModule'
  },
  {
    path: 'ContingencyPlan',
    loadChildren: './contingency-plan/contingency-plan.module#ContingencyPlanModule'
  },
  {
    path: 'TrainingExercises',
    loadChildren: './training-exercises/training-exercises.module#TrainingExercisesModule'
  },
  {
    path: 'TechnicalSupport',
    loadChildren: './technical-support/technical-support.module#TechnicalSupportModule'
  },
  {
    path: 'DisposeRescue',
    loadChildren: './dispose-rescue/dispose-rescue.module#DisposeRescueModule'
  },
  {
    path: 'IntegratedSupportability',
    loadChildren: './integrated-supportability/integrated-supportability.module#IntegratedSupportabilityModule'
  },
  {
    path: 'PublicOpinionResponse',
    loadChildren: './public-opinion-response/public-opinion-response.module#PublicOpinionResponseModule'
  },
  {
    path: 'PreventionMonitoring',
    loadChildren: './prevention-monitoring/prevention-monitoring.module#PreventionMonitoringModule'
  }
];
