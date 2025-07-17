import {
  ApplicationConfig,
  InjectionToken,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoadRemoteModule, InitRemoteEntry } from 'vanilla-native-federation';
import { routes } from './app.routes';

export const MODULE_LOADER = new InjectionToken<LoadRemoteModule<unknown>>(
  'loader'
);

export const appConfig = (
  loader: LoadRemoteModule<unknown>,
  init: InitRemoteEntry
): ApplicationConfig => ({
  providers: [
    { provide: MODULE_LOADER, useValue: loader },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes(init)),
  ],
});
