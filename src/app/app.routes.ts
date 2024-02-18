import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('@pages/details/details.page').then((m) => m.DetailsPage),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('@pages/create/create.page').then((m) => m.CreatePage),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./pages/edit/edit.page').then( m => m.EditPage)
  },
  {
    path: '**',
    loadChildren: () => import('@pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  }
];
