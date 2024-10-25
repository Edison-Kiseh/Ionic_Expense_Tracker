import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'progressBar',
    loadComponent: () => import('./progress-bar/progress-bar.component').then((m) => m.ProgressBarComponent),
  },
  {
    path: 'hello-world',
    loadComponent: () => import('./hello-world/hello-world.page').then( m => m.HelloWorldPage)
  },
  {
    path: 'color-picker',
    loadComponent: () => import('./color-picker/color-picker.page').then( m => m.ColorPickerPage)
  },
  {
    path: 'test',
    loadComponent: () => import('./test/test.page').then( m => m.TestPage)
  },
];
