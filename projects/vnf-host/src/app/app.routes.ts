import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { InitRemoteEntry } from 'vanilla-native-federation';

export const routes = (initRemoteEntry: InitRemoteEntry): Routes => [
  {
    path: 'mfe3',
    loadComponent: () =>
      initRemoteEntry('http://localhost:4203/remoteEntry.json', 'mfe3')
        .then((nf) =>
          nf
            .as<{ AppComponent: Type<unknown> }>()
            .loadRemoteModule('mfe3', './Component')
        )
        .then((m) => m.AppComponent),
  },
];
