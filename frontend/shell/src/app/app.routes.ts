import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('mfe-dashboard', './routes').then((m) => m.routes)
  },
  {
    path: 'jobs',
    loadChildren: () =>
      loadRemoteModule('mfe-jobs', './routes').then((m) => m.routes)
  },
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule('mfe-auth', './routes').then((m) => m.routes)
  },
  {
    path: 'candidates',
    loadChildren: () =>
      loadRemoteModule('mfe-candidates', './routes').then((m) => m.routes)
  }
];
