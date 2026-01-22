import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation-v4';

export const routes = (): Routes => [
  {
    path: 'mfe3',
    loadComponent: () =>
      loadRemoteModule('mfe3', './Component').then((m) => m.AppComponent),
  },
];
