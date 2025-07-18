import {
  ApplicationConfig,
  InjectionToken,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { LazyInitFederationResult } from 'vanilla-native-federation';
import { routes } from './app.routes';

export const MODULE_LOADER = new InjectionToken<LazyInitFederationResult>(
  'loader'
);

export const appConfig = (nf: LazyInitFederationResult): ApplicationConfig => ({
  providers: [
    { provide: MODULE_LOADER, useValue: nf },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes(nf.initRemoteEntry)),
  ],
});
