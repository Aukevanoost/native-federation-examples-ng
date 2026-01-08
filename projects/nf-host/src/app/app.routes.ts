import { Routes } from '@angular/router';
import { loadRemoteModule } from '@nf-beta/angular';

export const routes = (): Routes => [
  {
    path: 'mfe3',
    loadComponent: () =>
      loadRemoteModule('mfe3', './Component').then((m) => m.AppComponent),
  },
];
