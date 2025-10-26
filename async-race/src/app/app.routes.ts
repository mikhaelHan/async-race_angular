import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'garage',
    loadComponent: () => import('@app/app/pages/garage-component/garage.component'),
  },
  {
    path: 'statistics',
    loadComponent: () => import('@app/app/pages/statistics-component/statistics.component'),
  },
  {
    path: '',
    redirectTo: 'garage',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('@app/app/pages/not-found-component/not-found.component'),
  },
];
