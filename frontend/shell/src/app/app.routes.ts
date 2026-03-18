import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      loadRemoteModule('mfe-dashboard', './Component').then((m) => m.AppComponent)
  },
  {
    path: 'jobs',
    loadComponent: () =>
      loadRemoteModule('mfe-jobs', './Component').then((m) => m.AppComponent)
  },
  {
    path: 'candidates',
    loadComponent: () =>
      loadRemoteModule('mfe-candidates', './Component').then((m) => m.AppComponent)
  }
];
