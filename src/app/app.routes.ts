import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CaseDetailsComponent } from './pages/case-details/case-details.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'case/:caseTitle',
    component: CaseDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
